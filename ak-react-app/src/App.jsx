// Props- read-only properties that are shared between components
//        a parent component can send data to a child component
//        <Component Key=Value/>
//PropTypes =  a mechanism that ensures that the passed value
//             is of the correct datatype
//            age:PropTypes.numbers
//Default Props
//Conditional Rendering = allows you to control what gets 
//                        rendered in your application based
//                        in your application based on certain
//                        conditions (show,hide or change components)
//ReactHook = a special function that allows functional components
//              to use React features without writing class components
//              (useState, useEffect, useContext, useReducer, useCallback etc)
//useState = a react hook that allows the creation of a stateful variable
//           AND a setter function to update in the virtual DOM
//           [name, setName]
//onChange = event handler used primarily with form elements
//           ex. <input> <textarea> <select> <radio>
//           triggers a function every time the value of the 
//           input chanages
//Updater function = A function passed as an arguement to setState() usually
//                  ex. setYear(year + 1)
              //    ex. setYear(updater function or arror function )
              //    Allow for safe updates based on the prevous state 
              //    Used with multiple state updates and asynchronous functions
              //    Good practice to use updater function
//useEffect = React Hook that tells React DO SOME CODE WHEN (pick one):
//            This component re-renders
//            This component mounts
//            The state of a value

// useEffect(function, [dependencies])

// 1. useEffect(() => {})               //Runs after every re-rendering
// 2. useEffect(() => {}, [])           //Runs only on mount
// 3. useEffect(() => {}, [value])      //Runs on mount + when value changes

//USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetch Data from an API
// #5 Clean up when a component unmounts

//useContext - A react hook that allows you to share multiple
// value of components without passing props through each level

//PROVIDER COMPONENT
//1. import {createContext} from 'react'
//2. export const MyContext = createContent
//3. <MyContext.Provider value = {value}>
//    <Child />
//  <MyContext.Provider/>

//CONSUMER COMPONENTS
//1. import React, {useContext} from 'react'
// import {MyContext} from './ComponentA'
//2. const value = useContext(Mycontext);

//useState = Re-rendering the component when the state value changes

//useRef() = "use Reference" does not cause re-renders when its value changes
//            When you want a component to "remember" some information,
//            but you dont want that information to trigger new renders

//            1. Accessing /interacting with DOM elements
//            2. Handling Focus, Animation and Transitions
//            3. Managing timers and intervals
import StopWatch from "./StopWatch.jsx";

function App() {
 
  return(
    <>
     <StopWatch/>
    </>
    
  )
}
// // Time
export default App
//npm run dev