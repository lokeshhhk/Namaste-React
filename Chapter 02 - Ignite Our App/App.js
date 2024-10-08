
import React from "react";
import ReactDOM from "react-dom/client"
//React.createElement is a JS Object
const parent = React.createElement("div", { id: "parent" }, [React.createElement(
    "div",//Which tag to be created?
    { id: "child" },//attributes
    [
      React.createElement("h1", {}, "I'm an H1 Tag"),
      React.createElement("h2", {}, "I'm an H2 Tag"),
    ]//what to display?
  ),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an H1 Tag"),
    React.createElement("h2", {}, "I'm an H2 Tag"),
  ]),
]);//more than one element pass as an array

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World by React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);