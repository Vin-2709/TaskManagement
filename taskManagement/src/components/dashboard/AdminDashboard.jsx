import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/createTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className=' bg-gray-800 h-screen w-full p-7'>
      <Header changeUser={props.changeUser} name="Admin" /> 
      <CreateTask />
      <AllTask />
   </div>
  )
}

export default AdminDashboard
