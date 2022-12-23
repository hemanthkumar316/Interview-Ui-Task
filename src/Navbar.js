import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from './Images/logo.png'
const Navbar = () => {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <NavLink className="navbar-brand" to="#">
 <img src={logo} height="50px" style={{'marginBottom':'4px'}} alt='logo'/>
  </NavLink>

  <div className="collapse navbar-collapse">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ">
        <Link to="/" className="nav-link" >HOME</Link>
      </li>
      <li className="nav-item ">
        <Link to="/services" className="nav-link" >SERVICES</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" >PRODUCTS</Link>
      </li>
     ``  <li className="nav-item">
        <Link className="nav-link">AI INTERNSHIP</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link">CAREER</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link">BLOG</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link">ABOUT</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link">CONTACT US</Link>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar