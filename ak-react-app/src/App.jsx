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
import List from "./List.jsx"

function App() {
  return(
  <>
    <List/>
  </>
  )
}

export default App
//npm run dev