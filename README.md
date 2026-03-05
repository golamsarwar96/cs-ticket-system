## What is JSX, and why is it used?

Answer: JSX is short form of JavaScript XML. It lets us write HTML-like markup directly inside JavaScript code. JSX is mainly used on React. Unlike HTML, JSX is stricker. Means, we have to close all the tags (i.e. <br/> <hr/>)

All the JSX markup is wrapped inside one shared parent. a <div>...</div> or an empty <>....</>


## What is the difference between State and Props?

Answer:
useState: useState is a react hook that allows components to store, manage, and track data that changes over time. 
The dynamic data storage behaviour allow us to create interative and dynamic components. Some of important characteristics of useState are,

i. It is mutable
ii. Tracks data inside a component
iii. re-renders the componet when an interaction is done.

Props: props in react is a way of passing data from a parent component to a child component. Props can hold all types of data as an object. In react, it is commonly used on components that needs data passing from API from parent component to a child component. Some of important characteristics of props are,

i. It is not mutable.
ii. pass data into a component.
iii. re-renders the component.
iv. props are used to pass current value of useState.

## What is the useState hook, and how does it work? 

Answer: 
useState is a react hook that allows components to store, manage, and track data that changes over time. It returns a current value and a setter function. It triggers re-render when the setter function is called. 

Syntax : const [count, setCount] = useState(0);

here,
count = current value
setCount = setter function

## How can you share state between components?

Answer: 
States can be shared in multiple ways in react according to the project scenerio. 

1. Lifting up state: It is recommended for simple scenerios. Move state to the common parent component and pass it down via props. Best for sibling components. 

2. Context API: Makes state available for all the components. It doesn't require any props drilling. 

3. State management libraries like redux

4. Creating custom hooks.

## How is event handling done in React?

Answer: 
Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences,
i. event handlers in Dom are written in lowercase, but in react it is written in camelCase.
ii. As JSX is used in react, it passes function instead of strings when handling events. 

Example of react onClick handler, 
<button onClick={handleSignUp}>
  Sign Up
</button>