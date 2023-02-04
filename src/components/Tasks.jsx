import React, { useState, useEffect } from 'react';
import { ImBin } from "react-icons/im";
import { ImCheckmark } from "react-icons/im";
import { Link } from 'react-router-dom';


const Tasks = () => {

    const [tasks, setTasks] = useState([]);
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    useEffect(() => {
        setTasks(storedTasks.reverse());
    }, [storedTasks]);

    const completedTasks = tasks.filter((task) => task.completed);
    const uncompletedTasks = tasks.filter((task) => !task.completed);

    //handling completed tasks
    const handleComplete = (index) => {
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        const updatedTasks = [...tasks];
        ;
        updatedTasks[index].completed = true;
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        
    };
    
    //handling deleting of tasks

    const handleDelete = (index) => {
        // setTasks(tasks.filter((task, i) => i !== index));
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    };


    return (
        // <ul>
        //   {tasks.map((task, index) => (
        //     <li key={index}>{task}</li>
        //   ))}
        // </ul>

        <div className='container'>
            <div className='flex items-center justify-center'>
                <h2 className="mb-2 bg-stone-300 w-20 text-center">Pending</h2>
            </div>
            <div>
                {uncompletedTasks.map((task, index) => (
                       <Link to="#" onClick={() => handleComplete(index)}className="flex  justify-between bg-orange-100 mb-2 p-4 rounded" key={index}>
                        <div key={index}> {task.task} time due: {task.time} date due: {task.date}
                        </div>
                        <div className='flex'>
                            <button onClick={() => handleComplete(index)}>
                                <ImCheckmark color="#339966" fontSize="2em" />
                            </button>
                            <button onClick={() => handleDelete(index)} className="ml-4">
                                <ImBin color="#DC2626" fontSize="2em" />
                            </button>
                        </div>
                    </Link>

                ))}
            </div>
            <div className='flex items-center justify-center'>
                <h2 className="mb-2 bg-stone-300 w-20 text-center">Finished</h2>
            </div>
            <div>
                {completedTasks.map((task, index) => (
                    <div className='flex bg-green-200 mb-2 p-4 rounded justify-between' key={index}>
                        <div className='' >
                            <div key={index}>{task.task}</div>
                        </div>
                        <div>
                            <button onClick={() => handleDelete(index)} className="ml-4">
                                <ImBin color="#DC2626" fontSize="2em" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tasks;
