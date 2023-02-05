import React, { useState, useEffect, useContext } from 'react';
import { ImBin } from "react-icons/im";
import { DataContext } from '../App';
import Swal from 'sweetalert2'


function Tasks() {
    const localData = useContext(DataContext);

    const tasks = localData.data.sort((a, b) => {
        return b.id - a.id;
    });

    const ctasks = localData.data.sort((a, b) => {
        return b.cid - a.cid;
    });

    const completedTasks = ctasks.filter((task) => task.completed);
    const uncompletedTasks = tasks.filter((task) => !task.completed);

    //handling completed tasks
    const handleComplete = (taskId) => {
        const tasks = JSON.parse(localStorage.getItem("todos"));
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, completed: !task.completed, cid: Date.now() };
            }
            return task;
        });
        localStorage.setItem("todos", JSON.stringify(updatedTasks));
        localData.loadData();
    };


    //handling deleting of tasks
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                const tasks = JSON.parse(localStorage.getItem("todos"));
                const updatedTasks = tasks.filter(task => task.id !== id);
                localStorage.setItem("todos", JSON.stringify(updatedTasks));
                localData.loadData();
                Swal.fire(
                    'DELETED!',
                    'Task has been deleted',
                    'success'
                );
            }
        });

    };

    return (
        <div className='container'>
            <div className='flex items-center justify-center'>
                <h2 className="mb-2 bg-stone-300 w-20 text-center">My Tasks</h2>
            </div>
            <div>
                {uncompletedTasks.map((task, index) => (
                    <div className='flex items-center'>
                        <div onClick={() => handleComplete(task.id)} className="flex w-full sm:flex-wrap justify-between bg-green-200 mb-2 p-4 rounded hover:border-blue-500 border" key={task.id}>
                            <div className="flex sm:min-w-2/3">{task.task}</div>
                        </div>
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
                    <div className='flex items-center'>
                        <div className='flex w-full bg-green-100 mb-2 p-4 hover:border-blue-500 border justify-between items-center' key={task.id} onClick={() => handleComplete(task.id)}>
                            {task.task}

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
