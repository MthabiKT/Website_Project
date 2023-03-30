import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Footer from './Components/Footer'

import './App.css';
function App() {
  return (
    <Router>
      <main className="text-gray-400 bg-gray-900 body-font">
      <div className="App">
        <Navbar/>
        <Routes>
         <Route exact path="/" element={<Home/>} />
         {/* <Route exact path="/about" component={About} /> */}
         <Route exact path="/contact" element={<Contact/>} />
        </Routes>
        <Footer/> 
      </div>
      </main>
    </Router>
  );
}

export default App;
