function Button(){
   const handleClick = () => console.log("Hear Me Out !")
   
    return(
            <button onClick = {handleClick}> 
                Click Me!
            </button>)
}

export default Button