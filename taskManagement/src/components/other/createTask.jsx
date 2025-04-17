
import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext);

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState(null);
    const [asignTo, setAsignTo] = useState('');
    const [category, setCategory] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        const formattedDate = taskDate ? taskDate.toISOString().split('T')[0] : '';

        const taskObj = {
            taskTitle,
            taskDescription,
            taskDate: formattedDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false,
        };

        const data = [...userData];

        data.forEach((elem) => {
            if (asignTo === elem.firstName) {
                elem.tasks.push(taskObj);
                elem.taskCounts.newTask += 1;
            }
        });

        setUserData(data);
        localStorage.setItem("employees", JSON.stringify(data));

        // reset
        setTaskTitle('');
        setCategory('');
        setAsignTo('');
        setTaskDate(null);
        setTaskDescription('');
    };

    return (
        <div className='p-5 bg-black mt-5 rounded'>
            <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className='text-white text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text"
                            placeholder='Make a UI design'
                        />
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <DatePicker
                            selected={taskDate}
                            onChange={(date) => setTaskDate(date)}
                            className='bg-[#1c1c1c] text-white text-sm py-1 px-2 w-4/5 rounded outline-none border-none mb-4'
                            placeholderText='Select a date'
                        />
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                        <input
                            value={asignTo}
                            onChange={(e) => setAsignTo(e.target.value)}
                            className='text-white text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text"
                            placeholder='Employee name'
                        />
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className='text-white text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text"
                            placeholder='Design, dev, etc'
                        />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className='text-white w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'
                    ></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;
