# Inception

We set the stage for your React.js learning adventure. You'll gain an understanding of what React is, its role in modern web development, and why it's a crucial skill. We'll ignite your curiosity and prepare you to dive into the exciting realm of React.js.

### What is Emmet?

Emmet is basically generates some code for you.

### How to append html through javascript?

The code snippet below injects a heading tag into the root div.

```javascript
<script>
  const heading = document.createElement("h1"); heading.innerHTML = "Hello World
  from JavaScript"; const root = document.getElementById("root");
  root.appendChild(heading);
</script>
```

### How to install React in your project?

You can use a package manager like npm or yarn to install React.

```javascript
npm install react react-dom --save
```

You can use CDN to install React.

````javascript
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    ```
````

### What is CrossOrigin?

Cross Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allow a server to indicate any origins other than its own from which a browser should permit loading of resources.

### What is React Dom?

React DOM serves as the entry point of the DOM-related rendering paths. It is intended to be paired with the isomorphic React, which will be shipped as react to npm

#### In urdu What is React Dom?

React DOM DOM-related rendering paths ka entry point hai. Iska maqsad DOM ke sath mil kar kaam karna hai. Isko isomorphic React ke sath pair karna hua hai, jo ke npm par react ke naam se ship kiya jayega.

### What is Isomorphic React?

Isomorphic ka matlab hai ek hi codebase ko server aur client dono sides ke liye istemal karna. Isomorphic React mein, ek hi codebase se server-side aur client-side rendering hota hai.

### Why React and React Dom are not together?

It is because React can be used in different environments. For example, React can be used in mobile applications using React Native, React 3D. So, React Dom is used to render React in the browser.

### What is React.createElement and creating a root?

React.createElement is used to create a React element. It takes three arguments: type, props, and children. It returns a React element.

The root is the entry point of the React application. It is the parent of all the components. RootElement is created by ReactDOM.

### How to create an element in HTML using React CDN?

First of all we just created an h1 tag using `React.createElement` after that we created a root (root is something where all the React code will run). and we created the root using `ReactDOM.createRoot` and pass the id of div which is `root` in this case. After that we use `root.render(heading)` to render the heading in the root.

```javascript
<script>
  const heading = React.createElement( "h1",
  {}, "Hello World From React CDN" ); const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(heading);
</script>
```

### How you can create a nested element in React?

You can create another element inside an element by passing the element as a child to the parent element.
For example

```html
<div id="parent">
  <div id="child">
    <h1>I am a nested h1</h1>
  </div>
</div>
```

Solution:
React element is a plain object describing a component instance or DOM node and its desired properties. It contains only information about the component type (for example, a function or a class), its properties, and any child elements inside it.

When its rendering into dom it converts it into HTML.

```javascript
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "parent" }, "I am a nested h1 tag")
  )
);
```
