import React, {useState,useEffect} from "react";

function UseEffectExample() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);


    
    useEffect( ()=>{
        window.addEventListener('resize',handleSizeChange);
        console.log('Event Listener Added')
    },[] )

       function handleSizeChange() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
     }
    return(
    <>
    <p>Width:{width} px</p>
    <p>Height:{height} px</p>
    </>)
    
}
export default UseEffectExample;

