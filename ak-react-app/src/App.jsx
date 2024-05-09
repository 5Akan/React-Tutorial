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
import ProfilePic from './Profilepic.jsx'


function App() {
  

  return(
    <ProfilePic/>
  )
}
// 1:29:29 Time
export default App
//npm run dev