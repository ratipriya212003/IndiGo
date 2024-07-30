import React from 'react'
import logo from "../assets/logo.png";
import "../styles/Navbar.css";
function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
    <img className='logo' src={logo} alt='Not Avail'/>
    <h2>IndiGo</h2>
    </div>
    <h3>Admin Page</h3>

    <div className='profileIcon'>
    <i class='bx bxs-user-account' style={{color:'blue'}}  ></i>
    </div>
    
</div>
  )
}

export default Navbar