import React, {useState} from 'react'
function UpdateObject(params) {

    const [car,setCar] = useState({
        year:2024,
        make:"ford",
        model:"mustange"});

       function updateYear(e){
        setCar(c =>({...c, year:e.target.value}));
       }

       function updateMake(e){
        setCar(c=>({...c,make:e.target.value}));
       }

       function updateModel(e){
        setCar(c=>({...c,model:e.target.value}));
       }

    return(<div>
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
            <input type="number" value = {car.year} onChange={updateYear}/><br/>
            <input type="text" value = {car.make} onChange={updateMake}/><br/>
            <input type="text" value = {car.model} onChange={updateModel}/><br/>
           </div>)
    
}

export default UpdateObject

