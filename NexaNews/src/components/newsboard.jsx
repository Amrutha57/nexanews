import { useState, useEffect } from "react";
import "./Newsboard.css";
import Newsitem from "./newsitem";

const Newsboard = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?category=technology&apiKey=da6d3a0a9cae4cf3b48ea62c36a32dc5",
          {
            headers: {
              "User-Agent": "Mozilla/5.0",
              "Accept": "application/json"
            }
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setArticles(Array.isArray(data.articles) ? data.articles : []); 
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("Failed to load news. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="News">
      <h2>
        Latest <span className="badge bg-danger">News</span>
      </h2>
      
      {error && <p className="error-message">{error}</p>}
      
      {loading && !error ? <p>Loading news...</p> : null}

      {articles.length > 0 && !loading ? (
        articles.map((news, index) => (
          <Newsitem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage || "https://via.placeholder.com/150"}
            url={news.url}
          />
        ))
      ) : (
        !loading && !error && <p>No news articles available.</p>
      )}
    </div>
  );
};

export default Newsboard;