import React,{useState} from 'react';

function Todo() {
const [tasks,setTasks] = useState(['go home','dont run']);
const [newtask,setNewTask] = useState();

function handleAddTask(event) {
    setNewTask(event.target.value)
}

function handleDeleteTask(index) {
    
}

function handleMoveUp() {
    
}
//For tomorrow
function handleMoveDown() {
    
}

    return(
        <div className='todo-list'>
            <h2>Todo List</h2>
            <div>
                <input value={newtask}
                 placeholder="Enter your tasks..."
                 onChange={handleAddTask}
                 />
                 <ol>
                    {tasks.map((task,index)=>
                   <li key={index}>
                       <span className='text'>{task}</span>
                         
                         <button className='delete'
                         onClick={handleDeleteTask}>Delete</button>
                         <button className='move-up'
                          onClick={handleMoveUp}>Move Up</button>
                         <button className='move-down'
                         onClick={handleMoveDown}>Move Down</button>
                   </li>)}
                 </ol>
            </div>
        </div>
    );
}

export default Todo
//3:00:00
//3:11