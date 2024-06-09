//Color Picker needs
//Area for selecting the color
    //html-

//Area that displays the color
    //html-div area that contains the stateful variable displaying
        //colors that changes with onChange


import React,{useState} from "react"
function colorPicker(params) {
    const {color, setColor} = useState("#ffffff");
    return(
        <>
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor:color}}></div>
    
        
            
        </div>
        </>
    )
}

export default colorPicker