# Igniting Our App

We ignite our React app development journey. We dive into the fundamentals, exploring React components, JSX, and the key concepts that power React. It's the essential foundation for creating dynamic and interactive user interfaces.

### What is a bundler?

When we have normal HTML, CSS, JS files and we want to use them in our project, we need to bundle them together. A bundler is a tool that takes all of our files and bundles them together into one file so that our whole code will be minimized, cached, cleaned and optimized for the browser.

1. Webpack
2. Parcel
3. Vite

Our traditional create-react-app uses webpack, babel under the hood.

### Types of dependencies

1. Dev Dependencies: Generally required in development phase only. Not required in production.
2. Normal Dependencies: Required in both development and production phase.

### What is a transpiler?

A transpiler is a tool that converts one language to another language. For example, Babel converts ES6 to ES5.

### What is a compiler?

A compiler is a tool that converts one language to another language. For example, TypeScript compiler converts TypeScript to JavaScript.

### What is the difference between `~` and `^`

`^` this sign known as `caret`. `~` is called as tilde. `^` is used for minor version updates. `~` is used for patch (major) updates. Caret is always safe. Tilde is not always safe. When we add `^` in our package.json file with a package it means that if a minor version is released then it will be automatically updated. For example, if we have `^1.2.3` in our package.json file and if a new version `1.3.0` is released then it will be automatically updated.

### What is `package-lock.json`?

package-lock.json keeps track of the exact version of a package that is been installed. It is used to lock the version of the package.

### What is transitive dependencies?

When we install a package, it may have some dependencies. Those dependencies are called transitive dependencies.

### `npx` vs `npm`

With `npm` is used to install packages globally. `npx` is used to execute a package.

### Why CDN way is not a good way
Fetching from CDN it will make a network call which is expensive. It will also make our app vulnerable to security attacks.
