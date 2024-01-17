const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React CDN"
);

console.log(heading); // this is a react element. A normal javascript object.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
