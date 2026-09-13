# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript.
It is used in React to describe what the user interface should look like.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component.
State is data that is managed inside a component and can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and manage changing data in a React component.
In this project, it is used to store the technology list, selected technologies,
and loading state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run code when a component renders or when something changes.
I used it to fetch the technology data from the JSON file when the technology
section loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list.
It allows React to update the correct item efficiently when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content depending on a condition.
In this project, the loading message is shown while the JSON data is being
loaded, and the technology cards are shown after loading is complete.

Another example is the empty stack message, which is shown when no technologies
have been selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props.
In this project, `TechnologySection` passes a technology object and the
`onAdd` function to `TechCard`.

The child can send information back by calling a function received through props.
For example, `TechCard` calls `onAdd(technology)` when the Add to Stack button
is clicked.