import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing necessary modules
import Navbar from './Components/Navbar'; // Importing Navbar component
import Home from './Components/Home'; // Importing Home component
import Contact from './Components/Contact'; // Importing Contact component
import Footer from './Components/Footer'; // Importing Footer component
import About from './Components/About'; // Importing About component
import Project from './Components/Project'; // Importing Project component
import SkillsBar from './Components/Skills'; // Importing SkillsBar component
import './App.css'; // Importing App.css for styling

function App() {
  // Main App component which renders other components based on the routes

  return (
    <Router> {/*Router component to enable client-side routing*/}
      <div className='App'>  {/* Main App container*/}
        <Navbar/>  {/* Navbar component which contains navigation links*/}
        <Routes>  {/* Routes component to handle rendering of components based on URL*/}
          <Route exact path="/" element={<Home />} /> {/* Route for Home component*/}
          <Route exact path="/contact" element={<Contact />} /> {/* Route for Contact component*/}
          <Route exact path="/about" element={<About />} /> {/* Route for About component*/}
          <Route exact path="/projects" element={<Project/>} /> {/* Route for Project component*/}
          <Route exact path="/skills" element={<SkillsBar />} /> {/* Route for SkillsBar component*/}
        </Routes>
        <Footer /> {/*Footer component*/}
      </div>
    </Router>
  );
}

export default App;
