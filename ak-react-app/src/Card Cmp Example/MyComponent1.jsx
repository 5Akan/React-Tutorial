import React, {useState} from 'react'
function MyComponent(){
const [name,setName] = useState("Guest"); //Array destructuring
const [age,setAge] = useState(9);
const [isEmployed,setIsEmployed] = useState(false);
const [shipping, setShipping] = useState();

const handleChecked = (e) => {
    setShipping(e.target.value)
}

const updateName = () => {
    setName("Spongebob");
}
const updateAge = () => {
setAge(age + 1)
}
const updateEmployment = () =>{
    setIsEmployed(!isEmployed);
}

return (
<>
<div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <button onClick = {updateName}>Set Name</button>
        <button onClick={updateAge}>Set Age</button>

        <p>Employment Status: {isEmployed?"Yes":"No"}</p>
        <button onClick={updateEmployment}>Update Employment</button>

    </div>
    <label>
<input value = "loading" 
        type = "radio" 
        checked = {shipping === "loading"}
        onChange = {handleChecked}> Loading</input>
    </label>
</>
   
)
}
export default MyComponent
// 2:12