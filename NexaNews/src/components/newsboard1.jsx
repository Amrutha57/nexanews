import React from "react";
import "./ss.css";
import { useNavigate } from 'react-router-dom'; 

const successStories = [
    {
        name: "Reshma Saujani",
        image: "rs.png",
        story: " How this founder knew it was time to quit her CEO job",
        lesson: "Reshma Saujani had an ambitious goal to close the tech industry’s gender gap when she founded Girls Who Code in 2012",
        link:"https://www.cnbc.com/2025/03/05/how-girls-who-code-founder-knew-it-was-time-to-quit-ceo-job.html"
      },
      {
        name: "Brian Chesky",
        image: "bc.webp",
        story: "Airbnb CEO Brian Chesky Drops Cryptic ’Next Chapter’ Tease.",
        lesson: "Stocktwits - Airbnb co-founder and CEO Brian Chesky has hinted at what could be a major overhaul ",
        link:"https://in.investing.com/news/stock-market-news/airbnb-ceo-brian-chesky-drops-cryptic-next-chapter-tease-gets-market-buzzing-about-big-reveal-4826023"
      },
  {
    name: "Sundar Pichai",
    image: "sp.jpg",
    story: "Google CEO Sundar Pichai says DOJ’s antitrust demands could kill Google Search and hurt the web.",
    lesson: "Pichai says that’s like asking Google to give away its secret sauce. He even called it a “de facto divestiture of search",
    link:"https://www.moneycontrol.com/news/tags/sundar-pichai.html"

  },
  {
    name: "Mark Zuckerberg",
    image: "mark.jpg",
    story: "Dropped out of Harvard and built Facebook, transforming social networking forever.",
    lesson: "Build something people need, and keep evolving.",
    link:"https://www.businessinsider.com/mark-zuckerberg-ai-startup-company-with-small-team-2025-5"
  },
 
  {
    name: "Elon Musk",
    image: "elon.jpg",
    story: "ScotRail trials wi-fi using satellite technology",
    lesson: "The trains operate on the Inverness to Wick, Thurso, Kyle of Lochalsh, and Aberdeen services..",
    link: "https://www.bbc.com/news/articles/czr8746x8ymo"
  },
 
  {
    name: "Jeff Bezos",
    image: "jeff.jpg",
    story: "Started Amazon from a garage, faced losses, but made it the world’s largest e-commerce company.",
    lesson: "Be customer-focused, take risks, and adapt fast.",
    link:"https://www.reuters.com/business/amazons-bezos-leads-new-investment-ai-data-company-toloka-2025-05-07/"
  },
];

const Newsboard1 = () => {
  return (
    <div className="stories-container" >
      <h2>Latest Technical News 🚀</h2>

      <div className="stories-grid">
        {successStories.map((person, index) => {
          const cardContent = (
            <div className="story-card" key={index}>
              <img src={person.image} alt={person.name} className="story-image" />
              <h3 className="nam">{person.name}</h3>
              <h5 className="story-text">{person.story}</h5>
              <h6 className="lesson">💡 {person.lesson}</h6>
            </div>
          );

          return person.link ? (
            <a
              key={index}
              href={person.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              {cardContent}
            </a>
          ) : (
            cardContent
          );
        })}
      </div>
    </div>
  );
};

export default Newsboard1;
