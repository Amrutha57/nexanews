import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
   
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top py-1">
    <div className="container-fluid">
      {/* Logo & Brand Name */}
      <a className="navbar-brand d-flex align-items-center" href="#"> 
        <img src="./src/assets/nexanews.webp" alt="NexaNews Logo" className="me-2" width="65" height="35" /> 
        <b className="fs-4">NexaNews</b>
      </a>

      {/* Navbar Toggler Button */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar Links */}
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav d-flex gap-5">  
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Category</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
          <li className="nav-item  ms-last"> 
            <a className="nav-link" href="#">SignIn/Up</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>  

  )
}

export default Navbar

