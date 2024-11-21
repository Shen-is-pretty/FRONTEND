import React from "react";
import "./Aspiration.css";

const aspirationsData = [
  {
    id: 1,
    title: "Become a Music Performer",
    description:
      "I aspire to perform on stage, sharing my passion for music with audiences and creating memorable experiences through melodies and lyrics.",
    icon: "🎤",
  },
  {
    id: 2,
    title: "Create Inspirational Music",
    description:
      "My goal is to compose and produce music that resonates with people, inspiring them and leaving a meaningful impact.",
    icon: "🎼",
  },
  {
    id: 3,
    title: "Collaborate with Talented Artists",
    description:
      "I dream of working alongside other musicians and artists to create unique, groundbreaking performances and projects.",
    icon: "🎶",
  },
  {
    id: 4,
    title: "Connect with Global Audiences",
    description:
      "I hope to perform internationally, connecting with people from different cultures and sharing the universal language of music.",
    icon: "🌍",
  },
];

const AspirationPage = () => {
  return (
    <div className="aspiration-container">
      <h1>My Aspirations</h1>
      <div className="aspiration-list">
        {aspirationsData.map((aspiration) => (
          <div key={aspiration.id} className="aspiration-item">
            <div className="aspiration-icon">{aspiration.icon}</div>
            <h2>{aspiration.title}</h2>
            <p>{aspiration.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AspirationPage;
