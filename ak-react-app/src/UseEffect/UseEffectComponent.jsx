//useEffect = React Hook that tells React DO SOME CODE WHEN (pick one):
//            This component re-renders
//            This component mounts
//            The state of a value

// useEffect(function, [dependencies])

// 1. useEffect(() => {})               //Runs after every re-rendering
// 2. useEffect(() => {}, [])           //Runs only on mount
// 3. useEffect(() => {}, [value])      //Runs on mount + when value changes

//USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetch Data from an API
// #5 Clean up when a component unmounts

import React,{useEffect, useState} from 'react';

function UseEffectComponent() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState('green');
    useEffect(() =>{
        document.title = `Count: ${count} ${color}`;

        return() =>{
            //SOME CLEANUP CODE
            //runs after it unmounts or before the next re-render depending
            //on the type of useEffect
        }
    },[count,color])

    function addButton() {
        
        setCount(c => c + 1);
       
    }
    function subtractButton() {
        setCount(c => c - 1);
    }
    function changeColor() {
        setColor(c => c === 'green'? 'red':'green')
    }

return(<>
    <p style={{color:color}}>Count: {count} </p>
    <button onClick={addButton}>Add</button>
    <button onClick={subtractButton}>Subtract</button>
    <button onClick={changeColor}>Change Color</button>
       </>);
}

export default UseEffectComponent;
//3:21:00
//3:32:50