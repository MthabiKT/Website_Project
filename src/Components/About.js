import React from 'react';
import '../CSS/About.css';
import profilePic from '../images/about.jpg';

function Home() {
  return (<>
  <div className='container'>
    <h1 style={{marginTop:20}}>About Us</h1>
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <p>We are a team of women who are passionate about technology and innovation. We believe that everyone should have the opportunity to learn and succeed in the tech industry, regardless of their gender, race, or background.</p>
    
        </div>
        <div className="about-image">
          <img src={profilePic} alt="Profile" style={{width:'70%', height: 'auto'}}/>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Home;
