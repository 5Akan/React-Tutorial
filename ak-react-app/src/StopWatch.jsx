import React,{useState, useEffect, useRef} from "react";

function StopWatch() {

    const [isRunning, setIsrunning] = useState(false);
    const [elapsedTime, setElapsedtime] = useState(0)
    const intervalIdRef = useRef(null);
    const startTime = useRef(0);

    useEffect(()=>{
        if(isRunning){
            intervalIdRef.current = setInterval(()=>{
                setElapsedtime(Date.now()-startTime.current)
            },10)
        }

        return ()=>{
            clearInterval( intervalIdRef.current);
        }
    },[isRunning])

    function start() {
        setIsrunning(true);
        startTime.current = Date.now() - elapsedTime;
    }

    function stop() {
        setIsrunning(false);
    }

    function reset() {
        setIsrunning(false);
        setElapsedtime(0);
    }

    function formatTime() {
        let hours = Math.floor((elapsedTime) / 1000 * 60 * 60);
        let minutes = Math.floor((elapsedTime / (1000 * 60))% 60);
        let seconds = Math.floor((elapsedTime / 1000 )% 60);
        let milliseconds = Math.floor((elapsedTime % 1000 )/10);
        
        return `${padZero(minutes)}:${padZero(seconds)}:${padZero(milliseconds)}`
        //OR use this 
        // minutes = String(minutes).padStart(2, "0");
       
    }

    function padZero(numbers) {
        return (numbers < 10 ? '0':"") + numbers;
    }
    
    return(
       <div className="stopwatch">
           <div className="display">{formatTime()}</div>
           <div className="controls">
               <button onClick={start} className="start-button">Start</button>
               <button onClick={stop} className="stop-button">Stop</button>
               <button onClick={reset} className="reset-button">Reset</button>
           </div>
       </div>
    )
}

export default StopWatch;