// Props- read-only properties that are shared between components
//        a parent component can send data to a child component
//        <Component Key=Value/>
//PropTypes =  a mechanism that ensures that the passed value
//             is of the correct datatype
//            age:PropTypes.numbers
//Default Props
import Student from './Student.jsx'
function App() {
  return(
    <>
  <Student name="Spongebob" age = {29} isStudent = {true}/>
  <Student name = "Patrick" age = {18} isStudent  = {false}/>
  <Student name = "Squidward" age = {50} isStudent  = {false}/>
  <Student name = "Sandy" age = {22} isStudent  = {true}/>
  <Student name = "Akanimoh"/>
  </>
  )
}

export default App
//npm run dev