import React from 'react';

import './App.css';

import RollTable from './components/rollTable'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dice Roller</h1>
        <h3>Click the dice icons to roll a die.<br/>
          Reload the page to reset counts.</h3>
      </header>
      <RollTable/>
    </div>
  );
}

export default App;
