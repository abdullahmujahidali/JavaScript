import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Laying the foundation"
);

// JSX (transpiled before it reaches the JS ) - PARCEL - BABEL
const Title = () => (
  <h1 id="heading" className="head">
    Laying the foundation using JSX
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">React Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
