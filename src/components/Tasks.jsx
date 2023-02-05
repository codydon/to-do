import React, { useState, useEffect, useContext } from 'react';
import { ImBin } from "react-icons/im";
import { DataContext } from '../App';


function Tasks() {
    const localData = useContext(DataContext);
    const tasks=localData.data;
    
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
        localData.loadData();
    };


    //handling deleting of tasks
    const handleDelete = (id) => {
        const tasks = JSON.parse(localStorage.getItem("todos"));
        const updatedTasks = tasks.filter(task => task.id !== id);
        localStorage.setItem("todos", JSON.stringify(updatedTasks));
        localData.loadData();
    };

    return (
        <div className='container'>
            <div className='flex items-center justify-center'>
                <h2 className="mb-2 bg-stone-300 w-20 text-center">Pending</h2>
            </div>
            <div>
                {uncompletedTasks.map((task, index) => (
                    <div onClick={() => handleComplete(task.id)} className="flex sm:flex-wrap justify-between bg-orange-100 mb-2 p-4 rounded hover:border-blue-500 border" key={task.id}>
                        <div className="flex sm:min-w-2/3">{task.task}</div> 
                        <div className=''>
                            <button onClick={() => handleDelete(task.id)} className="ml-4">
                                <ImBin color="#DC2626" fontSize="1.7em" />
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
                    <div className='flex bg-green-200 mb-2 p-4 hover:border-blue-500 border justify-between items-center' key={task.id} onClick={() => handleComplete(task.id)}>
                        <div className='' >
                            <div>{task.task}</div>
                        </div>
                        <div>
                            <button onClick={() => handleDelete(task.id)} className="ml-4">
                                <ImBin color="#DC2626" fontSize="1.7em" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tasks;
