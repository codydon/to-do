import React, { useState, useEffect } from 'react';
import { ImBin } from "react-icons/im";
import { ImCheckmark } from "react-icons/im";
import { Link } from 'react-router-dom';


function Tasks(props) {

    const storedTasks = JSON.parse(localStorage.getItem("todos")) || [];

    const [tasks, setTasks] = useState(storedTasks);

    useEffect(() => {
        setTasks(storedTasks);
    }, [storedTasks]);

    const completedTasks = tasks.filter((task) => task.completed);
    const uncompletedTasks = tasks.filter((task) => !task.completed);

    //handling completed tasks
    const handleComplete = (taskId) => {
        const tasks = JSON.parse(localStorage.getItem("todos"));
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        localStorage.setItem("todos", JSON.stringify(updatedTasks));
    };


    //handling deleting of tasks
    const handleDelete = (id) => {
        const tasks = JSON.parse(localStorage.getItem("todos"));
        const updatedTasks = tasks.filter(task => task.id !== id);
        localStorage.setItem("todos", JSON.stringify(updatedTasks));
    };



    return (
        <div className='container'>
            <div className='flex items-center justify-center'>
                <h2 className="mb-2 bg-stone-300 w-20 text-center">Pending</h2>
            </div>
            <div>
                {uncompletedTasks.map((task, index) => (
                    <div onClick={() => handleComplete(task.id)} className="flex  justify-between bg-orange-100 mb-2 p-4 rounded" key={task.id}>
                        <div> {task.task} time due: {task.time} date due: {task.date}
                        </div>
                        <div>{task.id}</div>
                        <div className='flex'>
                            <button onClick={() => handleDelete(task.id)} className="ml-4">
                                <ImBin color="#DC2626" fontSize="2em" />
                            </button>
                        </div>
                    </div>

                ))}
            </div>
            <div className='flex items-center justify-center'>
                <h2 className="mb-2 bg-stone-300 w-20 text-center">Finished</h2>
            </div>
            <div>
                {completedTasks.map((task, index) => (
                    <div className='flex bg-green-200 mb-2 p-4 rounded justify-between' key={task.id} onClick={() => handleComplete(task.id)}>
                        <div className='' >
                            <div>{task.task}</div>
                        </div>
                        <div>
                            <button onClick={() => handleDelete(task.id)} className="ml-4">
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
