import React, { useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './Components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Projects from './components/Projects';
// import Contact from './components/Contact';


import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        {/* <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          
        </Switch> */}
        
      </div>
    </Router>
  );
}

export default App;
