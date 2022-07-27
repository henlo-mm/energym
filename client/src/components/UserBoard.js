import React, { useEffect } from 'react'
import Dashboard from './Dashboard'
import { useNavigate, useLocation } from 'react-router-dom'

function UserBoard() {
 /*  const navigate = useNavigate();
  const location = useLocation();
    console.log(location)

    useEffect(() => {
        let isAuth = localStorage.getItem('token');
        console.log(location.pathname)
      
        if(isAuth && isAuth !== null) {
            navigate(location.pathname);
        }
    }, []); */

  return (
    <div>
      <Dashboard />
    </div>
  )
}

export default UserBoard