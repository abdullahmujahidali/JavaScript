# Inception

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
