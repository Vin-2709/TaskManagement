import React from 'react'
import { useState } from 'react'

const Login = ({handleLogin}) => {
  const[email,setEmail]=useState('');
  const [password, setPass]=useState('');
  const submitHandler=(e)=>{
     e.preventDefault();
     handleLogin(email,password);
     setEmail('');
     setPass('');
  }

  return (
    <div className=' bg-gray-600  flex flex-col justify-center items-center h-screen w-screen '>
        <div className='bg-gray-300 h-140 w-170 rounded-4xl'> 
          <form onSubmit={(e)=>{
            submitHandler(e)
           }}
             className=' py-10 px-10 w-full h-full '>
            <h1 className='w-full text-4xl text-blue-800 font-bold  text-center my-5 '>Login </h1>
            <div className='flex flex-col justify-start items-start ml-35'>
            <label  className=' py-1 mt-15 font-medium '>User Name</label>
            <input value={email} onChange={(e)=>{
              setEmail(e.target.value)
            }} className=' py-2 font-medium outline-none  w-80 rounded-md p-2 border-1 ' placeholder="Enter Username" type='email'></input>
            <label className=' text-1xl py-2 font-medium'>Password</label>
            <input value={password} onChange={(e)=>{
              setPass(e.target.value);
            }} className='py-2 font-medium outline-none w-80 rounded-md p-2 border-1' placeholder='Enter Password' type='password'></input>
            </div>
            <button type='submit' className='bg-blue-700 w-30 mx-60 my-15 text-center  text-white  text-2xl p-2  rounded-md '>Log In</button>
          </form>
        </div>
    </div>
  )
}

export default Login 
