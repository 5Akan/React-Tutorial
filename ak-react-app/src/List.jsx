function List (props){
    const fruits = [
    {id:1,name:"mango",calories:95}, 
    {id:2,name:"orange",calories:45},
    {id:3,name:"banana",calories:105},
    {id:4,name:"coconut",calories:159},
    {id:5,name:"pineapple",calories:35}
    ];

    fruits.sort((x,y) =>x.name.localeCompare(y.name))//Alphabetially compare names
  
    const fruitList = fruits.map(fruit => 
    <li key = {fruit.id}>
        {fruit.name} &nbsp;
       <b>{fruit.calories}</b> 
    </li>
    
    
    )
    return (
        <ul>{fruitList}</ul>
        
    );
}
export default List 