import React from 'react'
import { useNavigate } from 'react-router-dom'; 
import './category.css';
const Category = () => {
    const navigate = useNavigate(); 

  return (<div className='con1'>
    
    <div className="container px-4  con">
    <h1 class="category-title">Choose Your Category</h1>
    <div className="row gx-5  gy-5 rows con1">
    <div className="col d-flex align-items-stretch">
    <div className="p-4 border bg-light ">
      <a  onClick={(e) => { e.preventDefault(); navigate("/news"); }}> 
        <img className='news-img'src='/news-breaking-news.gif' style={{ width: '450px', height: '250px' }}/>
        <div className="news-text">
    <h4 > The latest <br/>
    breaking Tech News</h4>
  </div>
  </a>
    </div>
  </div>
  <div className="col d-flex align-items-stretch">
    <div className="p-4 border bg-light ">
    <a onClick={(e) => { e.preventDefault(); navigate("/carer"); }} >
       <img  className='news-img'src='/carer.gif' style={{ width: '450px', height: '271px' }} />
       
    <div className="news-text ca">
    Career Guidance
    
  </div>
  </a>
    </div>
  </div>
    </div>
    <div className="container px-7  con">
    <div className="row gx-5 rows gy-5" >
    <div className="col d-flex align-items-stretch">
    <div className="p-4 border bg-light">
    <a  onClick={(e) => { e.preventDefault(); navigate("/build"); }}>  <img  className='news-img'src='/future.gif' style={{ width: '430px', height: '250px' }}/>
    </a>
    <div className="news-text">
    Build Your Network
  </div>
    </div>
  </div>
  <div className="col d-flex align-items-stretch">
    <div className="p-4 border bg-light"><a onClick={(e) => { e.preventDefault(); navigate("/success"); }} >  <img className='news-img' src='/success1.jpg' style={{ width: '430px', height: '250px' }}/>
   
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
