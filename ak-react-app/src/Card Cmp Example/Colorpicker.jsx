//Color Picker needs
//Area for selecting the color
    //Have input tag
    //the input should possesses a type for color
    //the input should value of color for changing the color
    //html-input holds the onChange event to the function holding the setter fn
        // setter fn displays the value of color in the DOM
    

//Area that displays the color
    //html-div area that contains the stateful variable displaying
    //div should have style = backgroundColor:color,
        //it indicates that the background color will be affected by
        //the color variable
        

import React, {useState} from 'react';
function Colorpicker(){
    const [color,useColor] = useState("#ffffff");
    const handleColorChange = (e) =>{
        console.log(e.target.value);
        useColor(e.target.value);
    }

return(
    <div className='main'>
        <p>Colour Picker</p>
        <div className='colour-container' style = {{backgroundColor:color}}>
        Where there is change

        </div>
        <input type="color" value = {color} onChange = {handleColorChange}/>
    </div>
)}




export default Colorpicker
//2:12

//