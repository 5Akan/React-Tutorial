//useState = Re-rendering the component when the state value changes

//useRef() = "use Reference" does not cause re-renders when its value changes
//            When you want a component to "remember" some information,
//            but you dont want that information to trigger new renders

//            1. Accessing /interacting with DOM elements
//            2. Handling Focus, Animation and Transitions
//            3. Managing timers and intervals

import React, {useState,useEffect, useRef} from "react";


function MyComponent() {

    const ref = useRef(0);
    useEffect(()=>{
        console.log("Rendering has occured")
    })

    function handleNumberCount() {
       ref.current ++;
       console.log( ref.current)
    }

    const [number, setNumber] = useState(0);
    return(
        <>
         <button onClick={handleNumberCount}>
             CLICK ME {ref.current}
        </button>
        </>
   
    )
}//4:17:04

export default MyComponent;