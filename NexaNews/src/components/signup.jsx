import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import './signup.css'

const SignUpPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Sign up successful!");
        navigate("/home");
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} className="signup-form">
                <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <a onClick={(e) => { e.preventDefault(); navigate("/signin");}}><button>Sign In</button></a></p>
        </div>
    );
};

export default SignUpPage;
