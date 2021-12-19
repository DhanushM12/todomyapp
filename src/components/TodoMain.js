import React, {useState} from 'react';
// import Button from '@mui/material/Button';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
import TodoItem from './TodoItem';
function TodoMain() {
    const [task, setTask] = useState("");
    const [taskArray, setTaskArray] = useState([]);
    const onTaskChange = (event) => {
        setTask(event.target.value);
    }
    const addTask = () => {
        setTaskArray((prevTasks) => {
            return [...prevTasks, task];
        })
        setTask("");
    }
    return (
        <div className="main_div">
            <div className="center_div">
                <h1>Todo List</h1>
                <input type="text" value={task} placeholder="Add your tasks" onChange={onTaskChange} />
                <button className="newBtn" onClick={addTask}>Add Task
                </button>
                <ol>
                    {
                    taskArray.map((val) => {
                        return <TodoItem text={val} />
                    })},
                </ol>
            </div>
        </div>
    )
}

export default TodoMain;
