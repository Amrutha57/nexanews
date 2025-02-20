import React, { useState } from "react";
import './contact.css'
const ContactPage = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("we will contact you soon..!");
    };

    return (
        <div className="contctbg" style={{ backgroundColor: "black", color: "white" }}>  
      <div className="contact-image">
                <img src="/contact.jpg" alt="Contact Us" />
            </div>
          
    
        <div className="contact-container">
            <h2 className="ch">Contact Us</h2>
            <p>We'd love to hear from you! Fill out the form below or reach us through social media.</p>
            
            <form onSubmit={handleSubmit} className="contact-form">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
                <button type="submit">Send Message</button>
            </form>
            
            <div className="social-links">
                <a href="https://github.com/Amrutha57" target="_blank">github</a>
                <a href="https://x.com/amruthalk" target="_blank">Twitter</a>
                <a href="https://www.linkedin.com/in/amrutha-laxmi-kola-516613290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">LinkedIn</a>
            </div>

            <div className="map">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4020967.432654892!2d78.12901110947128!3d15.91289981329564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d1774a47f2a3f%3A0x4b9f417282e54b7!2sAndhra%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1708432945678!5m2!1sen!2sus"
                    width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy">
                </iframe>
            </div>
        </div>
        </div>
    );
};

export default ContactPage;
