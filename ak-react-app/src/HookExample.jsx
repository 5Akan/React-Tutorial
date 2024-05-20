import React, {useState} from "react"
function Hookexaple() {
    const [name,setName ] = useState("");

    function handleNameChange(e) {
        setName(e.target.value);
    }
    return (<div>
            <input value = {name} onChange = {handleNameChange}/>
            <p>Name:{name}</p>
          </div>)
}

export default Hookexaple