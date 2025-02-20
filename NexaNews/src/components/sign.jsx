import React, { useState } from "react";
import './signin.css';
import { useNavigate } from 'react-router-dom'; 

const SignInPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/home");
    };

    return (
        <div className="signin-container">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit} className="signin-form">
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                <button type="submit">Sign In</button>
            </form>
            <p>Don't have an account? <a onClick={(e) => { e.preventDefault(); navigate("/signup");}}><button>Sign Up</button></a></p>
        </div>
    );
};

export default SignInPage;
