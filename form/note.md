# two primary ways handle submissions in a web app

1. Using a form tag with an action attribute: This is the traditional way of handling form submissions in HTML. When the form is submitted, the browser makes a request to the URL specified in the action attribute, using the method specified in the method attribute (GET or POST).

- Pros: It's simple and does not require JavaScript to work. It can be a good fallback if JavaScript fails or is disabled in the browser.
- Cons: It causes a full page reload and is less dynamic. It doesn't allow for the same level of interactivity as handling the submission with JavaScript.

2. Using JavaScript fetch (or another AJAX method) to handle the form: This approach involves intercepting the form submission event, preventing the default behavior, and using JavaScript to send the form data to the server.

- Pros: This method is more flexible and allows for a better user experience. You can validate the form data on the client side, handle errors, update the user interface without a page reload, and so on.
- Cons: It requires JavaScript to be enabled in the browser. If JavaScript fails, the form will not be able to submit data to the server.

# Controlled Input

An input like `<input />` is uncontrolled. Even if you pass an initial value like `<input defaultValue="Initial text" />`, your JSX only specifies the initial value. It does not control what the value should be right now.
To render a controlled input, pass the value prop to it (or checked for checkboxes and radios). React will force the input to always have the value you passed. Usually, you would do this by declaring a state variable

# Rerender Page

## When will the contents be updated?

In React, a re-render can be triggered by changes to state or props.

## Scope of React re-rendering area

the component where the triggered part is located, including the child components nested in

## How does React deal with this situation?

### Virtual DOM Diffing

React uses the virtual DOM to determine what actually needs to be updated in the real DOM. It compares the previous virtual DOM with the new one after the state change.

### Minimal Updates

Only the actual differences found by the reconciliation process will result in real DOM updates. If only the `input` value has changed, React will only update the `input` element's value in the DOM.

### Unchanged Elements

Siblings and parent components (unless they themselves are receiving updated props that have changed as a result of the state change) will not re-render. React's reconciliation process ensures that unchanged elements do not cause unnecessary DOM updates.

### Performance Optimizations

React also has several built-in optimizations to prevent unnecessary work. For example, if you type into an `input` and the value does not change (like if you type and then immediately delete a character), React might skip the re-render because it detects no actual changes in the state.

### Pure Components and Memoization

Additionally, for class components, `React.PureComponent`, and for functional components, `React.memo`, can be used to prevent re-renders when the props have not changed.

### Batching

React may batch multiple `setState` calls into a single update for performance reasons. This means that not every `setState` call will necessarily result in a separate render.

### Components Down the Tree

If `App` is the top-level component, a change in its state or props could potentially affect all child components within it. Each child component will also go through the same process of reconciliation to determine if it needs to be updated.

## Lifecycle Methods and Hooks

If you are using class components, lifecycle methods (like `shouldComponentUpdate`, `componentDidUpdate`, etc.) are invoked at various stages of this process. If you are using hooks in functional components (like `useEffect`), they are invoked after the DOM has been updated.
