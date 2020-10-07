import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [[width, height], setSize] = useState([0,0]);
  const set = () => setSize([window.outerWidth, window.outerHeight]);
  useEffect(() => {
    set();
    window.addEventListener('resize', set);
    return () => window.removeEventListener('resize', set);
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        {width} x {height}
      </header>
    </div>
  );
}

export default App;
