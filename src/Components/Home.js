import React from 'react';
import '../CSS/Home.css';
import ProjectsButton from './Button';
import profilePic from '../images/img.jpg';

function Home() {
  return (<>
    <h1 style={{marginTop:20}}>Welcome to my Portfolio</h1>
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <h3>Hey There! We are Team 4!:</h3>
          <p>As a team, we believe in the power of collaboration and are committed to creating an inclusive and supportive environment where everyone's ideas and contributions are valued. We pride ourselves on being adaptable and versatile, taking on challenges with enthusiasm and working together to find solutions.</p>
          <p>We invite you to explore our portfolio and get to know our team. Whether you're interested in learning about our past projects or looking to collaborate on future endeavors, we're excited to connect with you and share our passion for technology.</p>
          <ProjectsButton/>
        </div>
        <div className="home-image">
          <img src={profilePic} alt="Profile" style={{width:'70%', height: 'auto'}}/>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
