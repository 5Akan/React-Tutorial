import React,{useState} from "react";
function UpdateStateofArray(params) {
    const [fruits,setFruits] = useState(
        ["apples","banana","pawpaw","orange",]);

        function addFruit(params) {
            
        }

        function removeFruit(params) {
            
        }
    return (
    <>
   <div>
       <h2>List of Fruits</h2>
       <ul>
           {fruits.map((fruit,index)=><li key = {index}>{fruit}</li>)}
       </ul>
   <input type="text" id="foodinput" placeholder="Add your fruit"/>
   <button>Add Food</button>
   </div>
    </>)
}

export default  UpdateStateofArray