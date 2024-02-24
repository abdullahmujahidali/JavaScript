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

