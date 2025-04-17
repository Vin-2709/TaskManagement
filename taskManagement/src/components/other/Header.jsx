import React from 'react'

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser(null)
  }

  return (
    <div className='flex h-20 items-center justify-between p-2 bg-black rounded-md'>
      <h1 className='text-white text-3xl font-extrabold p-6 font-serif'>
        Hello, {props.name?.toLowerCase()}
      </h1>
      <button 
        onClick={logOutUser} 
        className='bg-red-600 rounded-md w-19 h-8 text-white m-2'
      >
        Log out
      </button>
    </div>
  )
}

export default Header