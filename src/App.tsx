import React from 'react';
import bsdLogo from './assets/black_swan_logo.png';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bsdLogo} alt="Blasck Swan Data logo" className="mainPageLogo"/>
      </header>
    </div>
  );
}

export default App;
