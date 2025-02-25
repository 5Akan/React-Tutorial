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

import DigitalClock from "./DigitalClock.jsx";


function App() {

  return(
    <>
    <DigitalClock />
    </>
    
  )
}
// // Time
export default App
//npm run dev