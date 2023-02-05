import React, { useState, useEffect } from 'react';


function InputBar(props) {
    // const [todos, setTodos] = useState([]);
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
        if (e.key === 'Enter') {
            e.preventDefault();
            if (!task) return;
            const tasks = JSON.parse(localStorage.getItem('todos')) || [];
            const id = Date.now(); // generate a unique id
            tasks.push({ id:id, task, completed: false, date: selectedDate, time: selectedTime });
            localStorage.setItem('todos', JSON.stringify(tasks));
            setTask('');
            // props.getData();
        }
    };



    return (
        <div className="flex justify-between mb-4  border-gray-400 border px-4">
            <div>
                <input
                    className="flex-1 px-2 py-4  rounded focus:outline-none "
                    type="text"
                    value={task}
                    onChange={e => setTask(e.target.value)}
                    onKeyDown={handleSubmit}
                    placeholder=" + Add Task"
                />
            </div>

            <div className='flex items-center'>
                <div className=' items-center mr-2'>
                    <span className="text-gray-600 mr-2">Duedate:</span>
                    <input
                        className="border border-gray-200 p-2"
                        type="date"
                        id="date"
                        value={selectedDate}
                        onChange={handleDateChange}
                    />
                </div>


                <div className=" flex items-center">
                    <span className="text-gray-600 mr-2">Due time:</span>
                    <div className="relative">
                        <input type="time" className="form-input bg-gray-200 focus:outline-none focus:bg-white border-2 border-gray-200 rounded-md p-2 appearance-none leading-normal" value={selectedTime}
                            onChange={handleTimeChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputBar;
