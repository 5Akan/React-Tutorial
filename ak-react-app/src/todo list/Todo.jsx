import React,{useState} from 'react';


function Todo() {
const [tasks,setTasks] = useState([]);
const [newtask,setNewTask] = useState();

function handleAddTask(event) {
    setNewTask(event.target.value)
}
function addTask() {
    if (newtask.trim() !== "") { //trim method removes white space
        setTasks(t=>[...t,newtask]);
        setNewTask('');  
    }
    
}
function handleDeleteTask(index) {
    setTasks(tasks.filter((_,i)=>i != index))
}
function handleMoveUp(index) {
    if (index>0) {

      const updateTask = [...tasks];
        [updateTask[index],updateTask[index-1]] =//destructuring took place here
        [updateTask[index-1],updateTask[index]];
        setTasks(updateTask);
    }
}
function handleMoveDown(index) {
    if(tasks.length - 1>index){
        const updateTask = [...tasks];
        [updateTask[index],updateTask[index + 1]] =//destructuring took place here
        [updateTask[index + 1],updateTask[index]];
        setTasks(updateTask);
    }
        
    
}

    return(
        <div className='to-do-list'>
            <h1>To-do-List</h1>
            <div>
                <input type='text'
                 value={newtask}
                 placeholder="Enter your tasks..."
                 onChange={handleAddTask}
                 />
                 <button 
                 className='add-button'
                 onClick={addTask}>Add</button>
                 <ol>
                    {tasks.map((task,index)=>
                   <li key={index}>
                       <span className='text'>{task}</span>
                         <button className='delete-button'
                          onClick={()=> handleDeleteTask(index)}>Delete</button>
                         <button className='move-button'
                          onClick={()=> handleMoveUp(index)}>Move Up</button>
                         <button className='move-button'
                         onClick={() => handleMoveDown(index)}>Move Down</button>
                   </li>)}
                 </ol>
            </div>
        </div>
    );
}

export default Todo
//3:00:00
//3:23:23