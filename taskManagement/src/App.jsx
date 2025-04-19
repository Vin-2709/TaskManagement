// import { useState } from 'react'
// import './App.css';
// import Login from './components/auth/login'
// import EmployeeDashboard from './components/dashboard/EmployeeDashboard';
// import AdminDashboard from './components/dashboard/AdminDashboard';
// import { AuthContext } from './Context/AuthProvider';

// function App() {
//   const [user ,setUser]=useState(null);
//   const authData=useContext(AuthContext);
  
//   const handleLogin = (email, password) => {
//     if (email == 'admin@me.com' && password == '123') {
//       setUser('admin')
//       localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
//     } else if (userData) {
//       const employee = userData.find((e) => email == e.email && e.password == password)
//       if (employee) {
//         setUser('employee')
//         setLoggedInUserData(employee)
//         localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee }))
//       }
//     }
//     else {
//       alert("Invalid Credentials")
//     }
//   }





//   return (
//     <>
//       {!user ? <Login handleLogin={handleLogin} /> : ''}
//       {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
//     </>
//   )
// }

// export default App




// import React, { useContext, useEffect, useState } from 'react'
// import Login from './components/Auth/Login'
// import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
// import AdminDashboard from './components/dashboard/AdminDashboard'
// import { AuthContext } from './context/AuthProvider'

// const App = () => {

//   const [user, setUser] = useState(null)
//   const [loggedInUserData, setLoggedInUserData] = useState(null)
//   const [userData,SetUserData] = useContext(AuthContext)

//   useEffect(()=>{
//     const loggedInUser = localStorage.getItem('loggedInUser')
    
//     if(loggedInUser){
//       const userData = JSON.parse(loggedInUser)
//       setUser(userData.role)
//       setLoggedInUserData(userData.data)
//     }

//   },[])


//   const handleLogin = (email, password) => {
//     if (email == 'admin@me.com' && password == '123') {
//       setUser('admin')
//       localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
//     } else if (userData) {
//       const employee = userData.find((e) => email == e.email && e.password == password)
//       if (employee) {
//         setUser('employee')
//         setLoggedInUserData(employee)
//         localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee }))
//       }
//     }
//     else {
//       alert("Invalid Credentials")
//     }
//   }



//   return (
//     <>
//       {user === null ? <Login handleLogin={handleLogin} /> : null}
//       {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
      

//     </>
//   )
// }

// export default App

//this is a check to git
import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login'; // Correct import name capitalization
import EmployeeDashboard from './components/dashboard/EmployeeDashboard';
import AdminDashboard from './components/dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';



const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData]   = useContext(AuthContext); // Adjust based on your actual context structure

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    
    if(loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      if(userData.data) {
        setLoggedInUserData(userData.data);
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (userData) {
      const employee = userData.find((e) => email === e.email && e.password === password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  


  return (
    <>
      {user === null && <Login handleLogin={handleLogin} />}
      
      {user === 'admin' && (
        <>
          <AdminDashboard changeUser={setUser} />
        </>
      )}
  
      {user === 'employee' && (
        <>
          <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
        </>
      )}
    </>
    
  );
};  

export default App;


