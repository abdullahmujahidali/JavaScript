const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "parent" }, "I am a nested h1 tag")
  )
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React CDN"
);

console.log(heading); // this is a react element. A normal javascript object.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
