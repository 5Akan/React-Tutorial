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
  const fruits = [
    {id:1,name:"mango",calories:95}, 
    {id:2,name:"orange",calories:45},
    {id:3,name:"banana",calories:105},
    {id:4,name:"coconut",calories:159},
    {id:5,name:"pineapple",calories:35}
    ];

    const vegitables = [
      {id:1,name:"spinach",calories:95}, 
      {id:2,name:"brocccoli",calories:45},
      {id:3,name:"onions",calories:105},
      {id:4,name:"carrots",calories:159},
      {id:5,name:"beet",calories:35}
      ]; 

  return(
  <> 
  {fruits.length ?<List items = {fruits} category = "Fruit"/>:null}
   {vegitables.length?<List items = {vegitables} category = "Vegitables"/>:null}
   <List/>
    
  </>
  )
}

export default App
//npm run dev