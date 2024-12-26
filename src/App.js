import React from 'react';
import Home from './home.jsx';
import Abot from './abot.jsx';
import Space from './space.jsx'; // Import Space component if you have it
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/abot" element={<Abot />} />
        <Route path="/space" element={<Space />} /> {/* Ensure Space component exists */}
      </Routes>
    </Router>
  );
}

export default App;
