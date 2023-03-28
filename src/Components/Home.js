import React from 'react';
import '../CSS/Home.css';
import ProjectsButton from './Button';
function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to my website</h1>
      <p>This is my personal website where I showcase my projects and skills.</p>
      <ProjectsButton/>
    </div>
  );
}

export default Home;
