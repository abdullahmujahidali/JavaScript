import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Laying the foundation"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// JSX (transpiled before it reaches the JS ) - PARCEL - BABEL
const jsxHeading = (
  <h1 id="heading" className="head">
    {" "}
    Laying the foundation using JSX
  </h1>
);

root.render(jsxHeading);
