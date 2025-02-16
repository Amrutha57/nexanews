import { useState } from "react";
import { useEffect } from "react";
import "./Newsboard.css";
import Newsitem from "./newsitem";

const Newsboard= ()=>
    {
      const [articles,setArticles]=useState([]);
      useEffect(()=>{
          let url='https://newsapi.org/v2/top-headlines?category=technology&apiKey=da6d3a0a9cae4cf3b48ea62c36a32dc5';
         fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles));
        },[])
      return (
        <div className="News">
        <h2>Latest<span className="badge bg-danger">News</span></h2>
          {articles.map((news,index)=>{
            return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
          })}
        </div>
      )
    }
    export default Newsboard