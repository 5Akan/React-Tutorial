import React,{useState} from "react";
function UpdateStateofArray(params) {
    const [fruits,setFruits] = useState(
        ["apples","banana","pawpaw","orange"]);

        function addFruit(params) {
            const foodValue = document.getElementById("foodinput").value;
            document.getElementById("foodinput").value = "";
            setFruits(f => [...f,foodValue]);
        }

        function removeFruit(index) {
            setFruits(fruits.filter((_,i)=> i !==index));
            //i represents the index of the current item(the one being clicked) on the list
            // the index represents index of items on the list
            //the arrow function inside the filter method makes i not to be an index in the list
            // ones i is not an index is true, filter method filters it out
            //_ means that argument is not used(ie the element arguement)
        }
    return (
    <>
   <div>
       <h2>List of Fruits</h2>
       <ul>
           {fruits.map((fruit,index)=>
           <li key = {index} onClick = {() => removeFruit(index)}> 
           {/* using an arrow function to pass index into the removeFruit function
           PS. functions pass things into things*/}
               {fruit}
           </li>)}
       </ul>
   <input type="text" id="foodinput" placeholder="Add your fruit"/>
   <button onClick={addFruit} >Add Food</button>
   </div>
    </>)
}
//2;forty-three mins
export default  UpdateStateofArray