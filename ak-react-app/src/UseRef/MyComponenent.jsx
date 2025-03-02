//useState = Re-rendering the component when the state value changes

//useRef() = "use Reference" does not cause re-renders when its value changes
//            When you want a component to "remember" some information,
//            but you dont want that information to trigger new renders

//            1. Accessing /interacting with DOM elements
//            2. Handling Focus, Animation and Transitions
//            3. Managing timers and intervals

import React, {useState,useEffect, useRef} from "react";


function MyComponent() {
     const inputRef1 = useRef(null);
     const inputRef2 = useRef(null);
     const inputRef3 = useRef(null);


    useEffect(()=>{
        console.log("Rendering has occured")
    })

    function handleNumberCount1() {
       inputRef1.current.focus();
       inputRef1.current.style.backgroundColor = "grey";
       inputRef2.current.style.backgroundColor = "";
       inputRef3.current.style.backgroundColor = "";
    }

    function handleNumberCount2() {
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef1.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
     }
     function handleNumberCount3() {
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "violet";
        inputRef2.current.style.backgroundColor = "";
        inputRef1.current.style.backgroundColor = "";
        
     }

    return(
        <>
        <div>
        <button onClick={handleNumberCount1}>
             CLICK ME 1
        </button><br/>
        <input ref ={inputRef1} /><br/>
        <button onClick={handleNumberCount2}>
             CLICK ME 2
        </button><br/>
        <input ref ={inputRef2} /><br/>
        <button onClick={handleNumberCount3}>
             CLICK ME 3
        </button><br/>
        <input ref ={inputRef3} /><br/>

        </div>
        
        </>
   
    )
}//4:17:04

export default MyComponent;