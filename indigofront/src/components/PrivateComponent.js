import React from 'react'
import {Navigate,Outlet} from "react-router-dom";

function PrivateComponent() {
    const auth=localStorage.getItem("user");

    if(!auth){
        alert("Login to check the all IndiGo flight updates");
        return <Navigate to="/login"/>
    }
  return (
   <Outlet/>
  )
}

export default PrivateComponent