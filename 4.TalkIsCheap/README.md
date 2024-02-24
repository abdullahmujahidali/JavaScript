# Laying The Foundations

## Introduction

### What is JSX?

JSX is a javascript syntax which is easier to create React elements.

JSX is not part of the core JavaScript language, it is a syntax extension. It is similar to XML/HTML.

JSX is not HTML inside javascript, it is a syntax extension that looks like HTML but it is not HTML.

// JSX (transpiled before it reaches the JS ) - PARCEL - BABEL

`const jsxHeading = <h1 id="heading"> Laying the foundation using JSX</h1>;`

BABEL will convert the above JSX to the below code:

`const jsxHeading = React.createElement('h1', {id: 'heading'}, 'Laying the foundation using JSX');`

### BABEL

BABEL is a transpiler that converts JSX to React.createElement() function calls.

### React Component

Everything is a component in React. A component is a reusable piece of code that can be used to build other components.

1. Class Based Components - Old way of writing code
2. Functional Components - New way of writing code

### Class Based Components

Class based components are the old way of writing components. It uses ES6 class syntax to define a component.

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### Functional Components

Functional components are the new way of writing components. It uses ES6 function syntax to define a component. If a function is returning piece of JSX, then it is a functional component.

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

#### React Element vs React Component

React Element is a plain object that represents a DOM element or a user-defined component. It is lightweight and is cheap to create.

```
const element = <h1>Hello, world</h1>;
```

React Component is a function or a class that accepts an input and returns a React element. It is a reusable piece of code that can be used to build other components.

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

React Component is rendered to the DOM using React.render() method.

```
root.render(<HeadingComponent />);
root.render(jsxHeading);
```

#### Component Composition

Components can be composed together to create complex UIs. A component can be used inside another component.

```javascript
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
```
