import React from "react";
import "./ss.css";
import { useNavigate } from 'react-router-dom'; 
const successStories = [
  {
    name: "Elon Musk",
    image: "elon.jpg",
    story:
      "Faced multiple failures but built Tesla and SpaceX, revolutionizing EVs and space travel.",
    lesson: "Keep pushing through failures and think long-term."
  },
  {
    name: "Sundar Pichai",
    image: "sp.jpg",
    story:
      "Grew up in a small home in India, studied under financial constraints, and became the CEO of Google.",
    lesson: "Stay curious and keep learning."
  },
  {
    name: "Jeff Bezos",
    image: "jeff.jpg",
    story:
      "Started Amazon from a garage, faced losses, but made it the world’s largest e-commerce company.",
    lesson: "Be customer-focused, take risks, and adapt fast."
  },
  {
    name: "Mark Zuckerberg",
    image: "mark.jpg",
    story:
      "Dropped out of Harvard and built Facebook, transforming social networking forever.",
    lesson: "Build something people need, and keep evolving."
  },
  {
    name: "Reshma Saujani",
    image: "rs.png",
    story:
      "Lost an election, faced rejection, but founded 'Girls Who Code' to inspire women in tech.",
    lesson: "If the system doesn’t work for you, create a new one!"
  },
  {
    name: "Brian Chesky",
    image: "bc.webp",
    story:
      "Couldn’t pay rent, started renting air mattresses, and turned it into Airbnb.",
    lesson: "Think differently—big solutions come from small problems."
  }
];

const SuccessStories = () => {
    const navigate = useNavigate();
  return (
    <div className="stories-container">
      <h2>Success Stories in Tech 🚀</h2>
      <p className="a">Be inspired by those who turned challenges into opportunities.</p>
      <div className="stories-grid">
        {successStories.map((person, index) => (
          <div className="story-card" key={index}>
            <img src={person.image}  className="story-image" />
            <h3 className="nam">{person.name}</h3>
            <h5 className="story-text">{person.story}</h5>
            <h6 className="lesson">💡 {person.lesson}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
