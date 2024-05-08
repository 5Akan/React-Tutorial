function Button(){
    let count = 0;
   const handleClick = (e) => {
       e.target.textContent = "Ouch !"//Acesses the text using the event(e) parameter
// if(count < 3){
// count ++;
// console.log(`${name} clicked me ${count} times`);//name was used a parameter
// }else{
//     console.log(`${name} stop clicking me `)
// }
   }
//    const handleClick2 = (name) => console.log(`${name} stop clicking me`)
    return(
            <button onDoubleClick = {(e) => handleClick(e)}> 
                Click Me!
            </button>)
}

export default Button