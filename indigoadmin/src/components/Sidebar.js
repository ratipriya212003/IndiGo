import React from 'react'
import "../styles/Sidebar.css";

import {Link} from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar">
<div className="sidebar-options">

<Link to='/flightlist' className="sidebar-option">
<div className='icon' style={{color:'white', fontSize:' 1.6rem'}}>
<i class='bx bx-add-to-queue'></i>
</div>
          <p>All Flights List</p>
</Link>
<Link to='/updateflight' className="sidebar-option">
<div className='icon' style={{color:'white', fontSize:' 1.6rem'}}>
<i class='bx bx-recycle'></i>
</div>
          <p>Update Details</p>
</Link>
</div>

    </div>
  )
}

export default Sidebar