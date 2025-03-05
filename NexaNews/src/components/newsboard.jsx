import { useState, useEffect } from "react";
import "./Newsboard.css";
import Newsitem from "./newsitem";

const API_KEY = "97d09053fa86690605cbede7e12d902f"; // Replace with a valid API key

const Newsboard = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        if (!API_KEY || API_KEY === "YOUR_NEW_API_KEY") {
          throw new Error("Missing or invalid API key. Please update your API key.");
        }

        const response = await fetch(
          `https://gnews.io/api/v4/top-headlines?category=technology&apikey=${API_KEY}&lang=en`,
          {
            headers: {
              "Accept": "application/json",
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
            },
            mode: "cors"
          }
        );

        if (!response.ok) {
          if (response.status === 401) {
            throw new Error("Unauthorized: Invalid API key or quota exceeded.");
          } else if (response.status === 403) {
            throw new Error("Forbidden: API key may be incorrect or not allowed.");
          } else if (response.status === 426) {
            throw new Error("Upgrade Required: Check GNews API documentation.");
          }
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response:", data);

        if (!data.articles || !Array.isArray(data.articles)) {
          throw new Error("Invalid API response: No articles found.");
        }

        setArticles(data.articles);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError(err.message || "Failed to load news. Please check your API key and try again.");
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

      {articles?.length > 0 && !loading ? (
        articles.map((news, index) => (
          <Newsitem
            key={index}
            title={news.title}
            description={news.description}
            src={news.image || "https://via.placeholder.com/150"}
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
