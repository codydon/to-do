import React, { useState, useEffect, useContext } from 'react'
import InputBar from './InputBar';
import Tasks from './Tasks';
import { ImHeart } from "react-icons/im";
import { BiCheckSquare } from "react-icons/bi";
import Swal from 'sweetalert2';
import { DataContext } from '../App';

export default function Home() {
    const localData = useContext(DataContext);
    // const [tasks, setTasks] = useState([]);
    function toggletheme() {
        localData.setDarkM(!localData.darkM);
    }
    //adding a task
    // const addTask = task => {
    //     setTasks([task, ...tasks]);
    // };

    //resetting app to initial state
    const resetApp = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, reset it!'
        }).then((result) => {
            if (result.value) {
                localStorage.clear();
                localData.loadData();
                Swal.fire(
                    'RESET!',
                    'Ttogglethemehe app has been reset',
                    'success'
                );
            }
        });
    };

    return (
        <div className='container mx-auto p-4'>
            <div className="">
                <div className='flex justify-evenly md:justify-between flex-wrap gap-2 mb-2'>
                    <div className='flex'>
                        <BiCheckSquare size={30} />
                        <h1 className="text-2xl font-bold">TODO</h1>
                    </div>
                    <div className='flex  gap-4'>

                        <div>
                            <button className="bg-black hover:bg-gray-300 hover:text-black text-white font-bold py-2 px-4 rounded" onClick={toggletheme}
                            >light/dark</button>
                        </div>
                        <div>
                           

                    </div>
                    <div>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={resetApp}
                        >RESET</button>
                        </div>

                    </div>
                </div>
            </div>

            <InputBar />
            <Tasks />

            <div className='flex items-center justify-center mt-4'>
                <p className='text-xs font-style: italic flex '>Made with &nbsp;<ImHeart color="#87CEEB" fontSize="1em" /> &nbsp; by Don</p>
            </div>

        </div>
    );

};
