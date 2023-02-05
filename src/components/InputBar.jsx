import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from '../App';


function InputBar(props) {
    const localData = useContext(DataContext);
    const [task, setTask] = useState('');

    const [selectedDate, setSelectedDate] = useState('not set');
    const [selectedTime, setSelectedTime] = useState('not set');

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };

    const handleSubmit = e => {
        // if (e.key === 'Enter') {
            e.preventDefault();
            if (!task) return;
            const tasks = JSON.parse(localStorage.getItem('todos')) || [];
            const id = Date.now(); // generate a unique id
            tasks.push({ id: id, task, completed: false});
            localStorage.setItem('todos', JSON.stringify(tasks));
            setTask('');
            localData.setData(tasks, ...localData.data);

            // window.location.reload();
        // }
    };



    return (
        <div>
            <div className="flex flex-col justify-between mb-4  border-gray-400 border-2 px-4 font-bold">
                    <form className='flex items-center' onSubmit={handleSubmit}> 
                    <input
                        className=" px-2 py-2 my-4 text-center focus:outline-none w-full border-b-4 bg-transparent"
                        type="search"
                        value={task}
                        onChange={e => setTask(e.target.value)}
                        // onKeyDown={handleSubmit}
                        placeholder=" + Add Task"
                    />

                    {/* //button for mobile and ipads */}
                    <input type="submit" className="form-input text-white cursor-pointer bg-blue-500 h-10 rounded-r-lg px-5" value="Add" />
                    </form>
            </div>

        </div>
    );
};

export default InputBar;
