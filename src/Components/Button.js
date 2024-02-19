import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Button.css'
function ProjectsButton() {
  return (
    <Link to="/about">
      <button className='projects-button'>About Me</button>
    </Link>
  );
}

export default ProjectsButton;
