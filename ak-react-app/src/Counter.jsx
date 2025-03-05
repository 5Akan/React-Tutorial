//the counter should not go below zero
import React, {useState} from "react";

function Counter() {

    const [toggle, setToggle] = useState(false);

    function handleAdd() {
        return setToggle(!toggle);
    }


    return(
        <>
        <div>
            <br />
            <button onClick={handleAdd}>{toggle ? 'ON': 'OFF'} </button>
            
        </div>
        </>
    )
    
}

export default Counter