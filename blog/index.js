import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";

import App from "./components/app";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App name="aaaa" />
    </BrowserRouter>,
    document.getElementById("app")
);