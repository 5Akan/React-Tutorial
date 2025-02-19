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
                         {task}
                         <button onClick={handleDeleteTask}>Delete</button>
                         <button onClick={handleMoveUp}>Move Up</button>
                         <button onClick={handleMoveDown}>Move Down</button>
                   </li>)}
                 </ol>
            </div>
        </div>
    );
}

export default Todo