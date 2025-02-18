import React from 'react'
import { useNavigate } from 'react-router-dom'; 
import './category.css';
const Category = () => {
    const navigate = useNavigate(); 

  return (<div className='con1'>
    <div className="container px-4  con">
    <div className="row gx-5  gy-5 rows con1">
    <div className="col d-flex align-items-stretch">
    <div className="p-4 border bg-light">
      <a  onClick={(e) => { e.preventDefault(); navigate("/news"); }}> 
        <img src='./src/assets/news-breaking-news.gif' style={{ width: '320px', height: '250px' }}/>
        <div className="news-text">
    <p> The latest <br/>
    breaking Tech News</p>
  </div>
  </a>
    </div>
  </div>
  <div className="col d-flex align-items-stretch">
    <div className="p-4 border bg-light">
    <a onClick={(e) => { e.preventDefault(); navigate("/carer"); }} >
       <img src='./src/assets/carer.gif' style={{ width: '320px', height: '250px' }} />
       
    <div className="news-text ca">
    Career Guidance
    
  </div>
  </a>
    </div>
  </div>
    </div>
    <div className="container px-8  con">
    <div className="row gx-5 rows gy-5" >
    <div className="col d-flex align-items-stretch">
    <div className="p-4 border bg-light">
    <a >  <img src='./src/assets/future.gif' style={{ width: '320px', height: '250px' }}/>
    </a>
    <div className="news-text">
    Build Your Network
  </div>
    </div>
  </div>
  <div className="col d-flex align-items-stretch">
    <div className="p-4 border bg-light"><a >  <img src='./src/assets/success1.jpg' style={{ width: '320px', height: '250px' }}/>
   
    <div className="news-text">
     Success Stories
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

export default Category
