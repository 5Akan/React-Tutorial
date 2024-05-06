import propTypes from "prop-types";
function List (props){
    
    // fruits.sort((x,y) =>x.name.localeCompare(y.name))//Alphabetially compare names
    // // fruits.sort((x,y) =>y.name.localeCompare(x.name))// Inversely Alphabetially compare names
    // // fruits.sort((x,y) =>x.calories-y.calories)//Numerically arange calories
    // // fruits.sort((x,y) =>x.calories-y.calories)//Inverely Numerically arange calories
    // const lowCaloriesFruits = fruits.filter(fruit => fruit.calories<100)//Filter fruit less than 100 calories
    const itemList = props.items;//Contains fruit array from App.jsx
    const fruitList = itemList.map(fruit => //Converts the array of string to an array of list elements
                    <li key = {fruit.id}>  
                        {fruit.name} &nbsp;
                    <b>{fruit.calories}</b> 
                    </li>
    )
    return (//Returns reuseable category from App.jsx and fruitlist
     <>
    <h3>{props.category}</h3>
    <ul>{fruitList}</ul>
    </>  
       
    );
}
List.propTypes = {
    items:propTypes.arrayOf(propTypes.shape({   id:propTypes.number,
                                                name:propTypes.string,
                                                calories:propTypes.number })),//This is an array of objects Shape is defining the shape of each object
    category:propTypes.string
}
List.defaultProps = {
    items:[],
    category:"None"
}
export default List 