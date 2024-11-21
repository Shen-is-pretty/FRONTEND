import React from "react";
import "./Hobbies.css";

const hobbiesData = [
  {
    id: 1,
    hobby: "Listening to Music",
    description: "Enjoying various genres and immersing myself in melodies and rhythms.",
    icon: "🎵",
  },
  {
    id: 2,
    hobby: "Browsing Social Media",
    description: "Staying connected, discovering trends, and exploring creative content online.",
    icon: "📱",
  },
  {
    id: 3,
    hobby: "Crafting Imaginative Stories",
    description: "Building worlds and weaving tales in my mind, exploring the depths of creativity.",
    icon: "🖋️",
  },
];

const HobbiesPage = () => {
  return (
    <div className="hobbies-container">
      <h1>My Hobbies</h1>
      <div className="hobbies-list">
        {hobbiesData.map((hobby) => (
          <div key={hobby.id} className="hobby-item">
            <div className="hobby-icon">{hobby.icon}</div>
            <h2>{hobby.hobby}</h2>
            <p>{hobby.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HobbiesPage;
