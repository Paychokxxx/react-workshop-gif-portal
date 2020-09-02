import "../assets/stylesheets/application.scss";

import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app";

// const Hello = (props) => {
//   const { name } = props;
//   return <h1>{`Hello ${name}`}</h1>;
// };

const root = document.querySelector("#root");
ReactDOM.render(<App />, root); // render component inside root
