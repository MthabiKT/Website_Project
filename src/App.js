import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
// import About from './Components/About';
// import Contact from './Components/Contact';


import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
         <Route exact path="/" element={<Home/>} />
         {/* <Route exact path="/about" component={About} />
         <Route exact path="/contact" component={Contact} /> */}
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
