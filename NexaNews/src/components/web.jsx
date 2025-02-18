import React from 'react'
import { useNavigate } from 'react-router-dom'; 
import './web.css'
const Web = () => {
  return (
    <div className='web'>
    <video  className="video-bg" src='./src/assets/webbg.mp4'  autoPlay loop muted/>
    </div>
  )
}

export default Web
