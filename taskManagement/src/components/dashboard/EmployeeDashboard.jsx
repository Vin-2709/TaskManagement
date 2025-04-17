import React from 'react'
import Header from '../other/Header'
import TaskList from '../TaskList/TaskList'
import TaskListNumbers from '../other/TaskListNumbers'



const EmployeeDashboard = (props) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header 
          changeUser={props.changeUser} 
          name={props.data?.firstName}  
        />
        <TaskListNumbers data={props.data} />
        <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard
