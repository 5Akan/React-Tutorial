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
import Counter from "./Counter.jsx"


function App() {
  

  return(
    <Counter />
  )
}
// Time
export default App
//npm run dev