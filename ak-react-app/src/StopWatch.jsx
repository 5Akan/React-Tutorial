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

    },[isRunning])

    function start() {
        setIsrunning(true);
        startTime.current = Date.now() - elapsedTime;
       console.log(Date.now())
    }

    function stop() {
        setIsrunning(false);
    }

    function reset() {
        setIsrunning(false);
        setElapsedtime(0)
    }

    function formatTime() {
        return '00:00:00'
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