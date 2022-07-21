import React from 'react'
import AuthUser from "../services/auth.service";
function AdminBoard() {
    const logOut = () => {
        console.log(localStorage.getItem("token"))
        AuthUser.logout();
        
      };
  return (
    <div>AdminBoard

        <button onClick={logOut}>f</button>
    </div>
  )
}

export default AdminBoard