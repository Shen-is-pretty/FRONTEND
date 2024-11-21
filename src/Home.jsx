import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
      <header>
        <a href="/home" className="my-homepage">My Homepage</a>
        <nav>
          <ul>
            <li><a href="/home" className="active">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/photos">Photos</a></li>
            <li><a href="/education">Education</a></li>
            <li><a href="/hobbies">Hobbies</a></li>
            <li><a href="/aspiration">Aspiration</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Home;
