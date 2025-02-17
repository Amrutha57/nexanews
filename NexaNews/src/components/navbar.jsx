import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(""); // State to store search input

  // Function to handle search submission
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent page refresh
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`); // Redirect to search results page
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top py-1">
      <div className="container-fluid">
        {/* Logo & Brand Name */}
        <a className="navbar-brand d-flex align-items-center" href="#" onClick={(e) => { e.preventDefault(); navigate("/"); }}> 
          <img src="./src/assets/nexanews.webp" alt="NexaNews Logo" className="me-2" width="65" height="35" /> 
          <b className="fs-4">NexaNews</b>
        </a>

        {/* Navbar Toggler Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" ></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav d-flex gap-5 ">  
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); navigate("/news"); }}>
                News
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); navigate("/category");}}>Category</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            {/* Search Form */}
            <li className="nav-item"> 
              <form className="d-flex" onSubmit={handleSearch}>
                <input 
                  className="form-control form-control-sm me-2" 
                  type="search" 
                  placeholder="Search" 
                  aria-label="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)} // Update state
                />
                <button className="btn btn-sm btn-outline-success" type="submit">Search</button>
              </form>
            </li>
            <li className="nav-item ms-last "> 
              <a className="nav-link" href="#"><button>Sign in/up</button></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>  
  );
};

export default Navbar;
