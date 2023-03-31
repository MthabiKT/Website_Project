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
          <h2>Hey There! I am Muthoni a Software Developer:</h2>
          <p>Mauris consequat turpis non elementum tempor. Maecenas tortor elit, interdum a nisl id, accumsan mattis tellus. Nam ullamcorper lorem ut ligula sagittis, ut dapibus libero dapibus. Curabitur nisi diam, varius non risus sit amet, vehicula viverra neque. Sed ut nulla nibh. Fusce quis tempus sem. Fusce ut aliquam velit. Donec dapibus urna felis, vitae venenatis dui dictum vitae. Sed velit lorem, consectetur ac dui nec, efficitur bibendum metus. Pellentesque nunc arcu, congu</p>
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
