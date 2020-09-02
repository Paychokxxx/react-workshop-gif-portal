import "../assets/stylesheets/application.scss";

import React from "react";
import ReactDOM from "react-dom";

import Hello from "./components/hello"

// const Hello = (props) => {
//   const { name } = props;
//   return <h1>{`Hello ${name}`}</h1>;
// };

const root = document.querySelector("#root");
ReactDOM.render(<Hello name="Bob" />, root); // render component inside root
