import React from 'react'
import { useNavigate } from 'react-router-dom'; 
import './carer.css';
import './category.css';
const Carer = () => {
  const navigate = useNavigate(); 
  return (
    <div className='con2'>
      <video  className="video-bg1" src='/webbg.mp4'  autoPlay loop muted/>
    <div className="container px-4  con">
    <h1 class="category-title1">Select Your Choice</h1>
    <div className="row gx-5  gy-5 rows con2">
    <div className="col d-flex align-items-stretch">
    <div className="p-4 border bg-light">
      <a  onClick={(e) => { e.preventDefault(); navigate("/web"); }}> 
      <video src='/web.mp4' style={{ width: '320px', height: '250px' }} autoPlay loop muted/>
        <div className="news-text"  style={{}}>
    <p style={{ fontSize: "1.9rem" }}> Web Development</p>
  </div>
  </a>
    </div>
  </div>
  <div className="col d-flex align-items-stretch">
    <div className="p-4 border bg-light">
    <a onClick={(e) => { e.preventDefault(); navigate("/cyber"); }} >
       <img src='./src/assets/cyber.webp' style={{ width: '320px', height: '250px' }} />
       
    <div className="news-text ca">
  Cyber Security
    
  </div>
  </a>
    </div>
  </div>
    </div>
    <div className="container px-8  con">
    <div className="row gx-5 rows gy-5" >
    <div className="col d-flex align-items-stretch">
    <div className="p-4 border bg-light">
    <a onClick={(e) => { e.preventDefault(); navigate("/ai"); }}>  <img src='./src/assets/A.I-2.gif' style={{ width: '320px', height: '250px' }}/>
    </a>
    <div className="news-text">
   AI And Machine Learning
  </div>
    </div>
  </div>
  <div className="col d-flex align-items-stretch">
    <div className="p-4 border bg-light"><a onClick={(e) => { e.preventDefault(); navigate("/ds"); }}>  <img src='./src/assets/datascience.gif' style={{ width: '320px', height: '250px' }}/>
   
    <div className="news-text">
     Data Science
  </div>
  </a>
    </div>
  </div>
    </div>
  </div>
  </div>
  </div>
  )
}

export default Carer
