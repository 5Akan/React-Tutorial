//Updater function = A function passed as an arguement to setState() usually
//                  EG. instead of normal  setYear(year + 1)
              //    we use  setYear(updater function or arror function )
              //    Allow for safe updates based on the prevous state 
              //    Used with multiple state updates and asynchronous functions
              //    Good practice to use updater function

import React,{useState} from 'react'
function MyComponent(){
const [count,updateCount] = useState(0);

const incrementCount = () =>{
    // takes the PENDING state to calculate the NEXT state
    //React puts your updater function in a queue (waiting in line)
    //During the next render, it will call them in the same order
    
    updateCount(c => c + 1); 
    updateCount(c => c + 1);
    updateCount(c => c + 1);
//c (first letter of count ) or prevCount represets previous count 
//indicating the previous state not the currebt state 
}

const decrementCount = () =>{
    updateCount(count -1)
}

const resetCount = () =>{
    updateCount(0)
}
return(
    <>
    <div className='counter-container'>
    <p className='count-display'>Count:{count}</p>
    <button onClick={incrementCount}>Increase</button>
    <button onClick={decrementCount}>Decrease</button>
    <button onClick={resetCount}>Reset</button>
    </div>
    </>
 
)
}
export default MyComponent