import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Button.css'
function ProjectsButton() {
  return (
    <Link to="/projects">
      <button className='projects-button'>Go to Projects</button>
    </Link>
  );
}

export default ProjectsButton;
