import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // localStorage.clear()

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        setLocalStorage()
        const {employees} = getLocalStorage()
        setUserData(employees)
    }, [])
    
    

    return (
        <div>
            <AuthContext.Provider value={[userData,setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}


// AuthProvider.jsx
// const AuthProvider = ({ children }) => {
//     const [users, setUsers] = useState([
//       // Sample employee data
//       { id: 1, email: 'ravi@me.com', password: '123', firstName: 'Ravi', tasks: [] },
//       { id: 2, email: 'sneha@me.com', password: '123', firstName: 'Sneha', tasks: [] }
//     ]);
  
//     // Add task to a specific employee
//     const addTaskToEmployee = (employeeId, newTask) => {
//       setUsers(prevUsers => 
//         prevUsers.map(user => 
//           user.id === employeeId 
//             ? { ...user, tasks: [...user.tasks, newTask] } 
//             : user
//         )
//       );
//     };
  
//     return (
//       <AuthContext.Provider value={{ users, addTaskToEmployee }}>
//         {children}
//       </AuthContext.Provider>
//     );
//   };
   export default AuthProvider