import React from 'react';
import '../CSS/Home.css';
import ProjectsButton from './Button';
import profilePic from '../images/2.jpg';
import Social from './Social'
function Home() {
  return (<>
    <h1 style={{marginTop:20, marginBottom:20,color:'white',fontSize:30}}>Welcome to our Portfolio</h1>
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <h3>Hey There! We are Team 4</h3>
          <ProjectsButton/>
        
        </div>
        <div className="home-image">
          <img src={profilePic} alt="Profile" style={{width:'60%', height: 'auto'}}/>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
