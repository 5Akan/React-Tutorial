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

import React,{useState} from 'react';

function UseEffect() {
    return(<></>);
}

export default UseEffect;
//3:21:00
//3:25:50