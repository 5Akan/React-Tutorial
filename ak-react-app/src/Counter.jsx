import React,{useState} from 'react'
function Counter(){
const [count,updateCount] = useState(0);

const incrementCount = () =>{
    updateCount(count +1)
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
export default Counter