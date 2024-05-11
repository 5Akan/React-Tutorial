import React, {useState} from 'react'
function MyComponent(){
const [name,setName] = useState("Guest"); //Array destructuring
const [age,setAge] = useState(9);
const [isEmployed,setIsEmployed] = useState(false);

const updateName = () => {
    setName("Spongebob");
}
const updateAge = () => {
setAge(age + 1)
}
const updateEmployment = () =>{
    setIsEmployed(true);
}

return (

    <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <button onClick = {updateName}>Set Name</button>
        <button onClick={updateAge}>Set Age</button>

        <p>Employment Status: {isEmployed?"Yes":"No"}</p>
        <button onClick={updateEmployment}>Update Employment</button>

    </div>
)
}
export default MyComponent