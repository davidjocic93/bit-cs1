import React from "react";
import ReactDOM from "react-dom";
import Data from "./data";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Search from "./search";


const Post = (props) => {
    return (
        <div className="col-12 col-md-6 posts">
            <div className="box-border">
                <h3>Title {props.id}</h3>
                <p>{props.body}</p>
                <hr />
            </div>
        </div>
    );
};

const searchHandler = function (dado) {
    console.log(dado);
};


class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };

    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                this.setState({
                    data: result,
                });
            });
    }

    searchHandler (searchString) {
        let filtered = this.state.data.filter(post => post.title = this.state.searchString);
        this.setState ({
            data: filtered
        });
    }
    

    render() {
   
        return  (
            this.state.data.map((post) => <Link to={`/singlepost/${post.id}`} key={post.id}><Post id={post.id} title={post.title} body={post.body} /></Link>)
        );
    }

}

const Main = (props) => {
    return (
        
        <div className="row">
            <Search onSearchRequest={searchHandler}/> 
            <Posts />
        </div>
    );
};

// Post.propTypes = {
//     title: PropTypes.string.isRequired,
//     body: PropTypes.string.isRequired,
//     // id: PropTypes.oneOf([1, 2, 3, 4, 5]),
//     word: PropTypes.oneOf(["one", "paper", "whatever"])
// };

// const Posts = (props) => {
//     return (
//         Data.items.map((post) => <Post title={post.title} body={post.body} key={post.id} id={post.id}/> )
//     );
// };


export default  Main;