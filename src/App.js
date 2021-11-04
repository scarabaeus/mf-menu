import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';

const App = () => {
  const container = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(0, 130, 151, 1)',
  };
  const link = { display: 'inline-flex', padding: '0 1rem' };

  return (
    <Router>
      <div style={container}>
        <div style={link}>platform-menu app</div>
        <div style={link}>
          <Link to="/mf-subapp1">mount mf-subapp1</Link>
        </div>
        <div style={link}>
          <Link to="/mf-subapp2">mount mf-subapp2</Link>
        </div>
        <div>React version: {React.version}</div>
      </div>
    </Router>
  );
};

export default App;
