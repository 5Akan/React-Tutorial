import React, {useState} from 'react';
function UpdateArrayofObjState() {
    const [cars,setCar] = useState(['chevrolet','mustang']);
    const [carMake,setCarMake] = useState("");
    const [carModel,setCarModel] = useState("");
    const [carDate,setCarDate] = useState(new Date().getFullYear());
    
function addCar() {
    
    
}
function removeCar(index) {
    
}

function modifyCarModel(e) {
    
}

function modifyCarMake(event) {
    
}

function modifyCarDate(event) {
    
}



    return(
    <>
    <ul>
        
        {cars.map(car=>
        <li>
            {car}
        </li>
            )}
       
    </ul>
    <input id='make' value={carMake} onChange = {modifyCarMake} placeholder="Input Car Make"/><br />
    <input id='model' value={carModel} onChange = {modifyCarModel} placeholder="Input Car Model"/><br />
    <input id='date' value={carDate} onChange = {modifyCarDate} placeholder="Input Car Date"/><br />
    <button onClick={addCar}>Add Car</button>
    </>
      
    );
}  
export default UpdateArrayofObjState;