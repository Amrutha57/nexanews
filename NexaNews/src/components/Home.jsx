import React from 'react'
import "./home.css"
import { useNavigate } from 'react-router-dom'; 
function Home(){
  const navigate = useNavigate();
  return (
    <div className='home'>
       <video  className="video-bg" src='/vid.mp4'  autoPlay loop muted/>
       <h1 className='homepage' >Where tech meets the future.</h1>
       <h2 className='aim'>Stay Curious, Stay Informed – Only at NexaNews</h2>
       <h3>personalized updates, cutting-edge news, and the dev community – all in one place. 
        It’s like your personal tech crystal ball, but cooler</h3>
    <a onClick={(e) => { e.preventDefault(); navigate("/signin");}} >   <button  type="button" className="btn btn-light joinus">Join Us - Now</button></a> 
    </div>
  )
}

export default Home
