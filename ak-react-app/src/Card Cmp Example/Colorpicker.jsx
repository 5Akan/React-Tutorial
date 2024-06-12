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
        


import React,{useState} from "react"
function colorPicker(params) {
    const [color, setColor] = useState("#ffffff");

    function handleColor(event) {
        setColor(event.target.value)
    }

    return(
        <>
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor:color}}>
                
                <p>Selected Colour: {color}</p>
            </div>        
            <label>Select a Colour</label>
            <input type="color"  value = {color} onChange = {handleColor}/>
        </div>
        
        </>
    )
}

export default colorPicker