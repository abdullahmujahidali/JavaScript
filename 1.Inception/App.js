const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "I am a nested h1 tag"),
    React.createElement("h2", { id: "h2" }, "I am a sibling h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "h1" }, "I am a nested h1 tag"),
    React.createElement("h2", { id: "h2" }, "I am a sibling h2 tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React CDN"
);

console.log(heading); // this is a react element. A normal javascript object.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
