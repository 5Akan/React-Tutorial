import React, {useState} from 'react';
function UpdateArrayofObjState() {
    const [cars,setCar] = useState([]);
    const [carMake,setCarMake] = useState("");
    const [carModel,setCarModel] = useState("");
    const [carDate,setCarDate] = useState(new Date().getFullYear());
    
function addCar() {
    const newCars = {
        year:carDate,
        make:carMake,
        model:carModel
    }
    
    setCar(c =>[...c, newCars]);
    setCarMake('');
    setCarModel('');
   
}

function removeCar(index) {
    setCar(cars.filter((_,i)=>i!=index));
}

function modifyCarModel(e) {
    setCarModel(e.target.value);
}

function modifyCarMake(event) {
    setCarMake(event.target.value);
}

function modifyCarDate(event) {
    setCarDate(event.target.value);  
}


return(
    <>
    <ul>
        
        {cars.map((car,index)=>
        <li key={index} onClick={()=> removeCar(index)}>
            {car.make} {car.model} {car.year}
        </li>
            )}
       
    </ul>
    <input id='make' value={carMake} onChange = {modifyCarMake} placeholder="Input Car Make"/><br />
    <input id='model' value={carModel} onChange = {modifyCarModel} placeholder="Input Car Model"/><br />
    <input id='date' type='number' value={carDate} onChange = {modifyCarDate} placeholder="Input Car Date"/><br />
    <button onClick={addCar}>Add Car</button>
    </>
      
);
}  
export default UpdateArrayofObjState;