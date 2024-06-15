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

import UpdateObject from "./UpdateObject.jsx"


function App() {
  

  return(
    <>
    <UpdateObject />
    </>
    
  )
}
// Time
export default App
//npm run dev