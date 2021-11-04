import React from 'react';
import './App.css';

const App = () => {
  const container = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(0, 130, 151, 1)',
  };
  const link = { display: 'inline-flex', padding: '0 1rem' };

  const push = (subapp) => {
    window.history.pushState(null, subapp, subapp);
  };

  return (
    <>
      <div style={container}>
        <div style={link}>platform-menu app</div>
        <div style={link}>
          <button
            onClick={() => {
              push('/mf-subapp1');
            }}
          >
            mount mf-subapp1
          </button>
        </div>
        <div style={link}>
          <button
            onClick={() => {
              push('/mf-subapp2');
            }}
          >
            mount mf-subapp2
          </button>
        </div>
        <div>React version: {React.version}</div>
      </div>
    </>
  );
};

export default App;
