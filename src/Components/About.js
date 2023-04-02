import React from 'react';
import '../CSS/About.css';
import profilePic from '../images/about.jpg';

function Home() {
  return (<>
    <h1 style={{marginTop:20}}>About Us</h1>
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <p>We are a team of women who are passionate about technology and innovation. We believe that everyone should have the opportunity to learn and succeed in the tech industry, regardless of their gender, race, or background.</p>
          
      <p>As women in tech, we understand the challenges and biases that exist in the industry, and we are committed to breaking down those barriers. We support and encourage one another, and we strive to create a more inclusive and diverse tech community.</p>

<p>Our team consists of individuals with diverse backgrounds and experiences, but we all share a love for technology and a desire to make a positive impact. We are constantly learning and growing, and we are excited to see what the future holds for us and for the tech industry as a whole.</p>
        
        </div>
        <div className="about-image">
          <img src={profilePic} alt="Profile" style={{width:'70%', height: 'auto'}}/>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
