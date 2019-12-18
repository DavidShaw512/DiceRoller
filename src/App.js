import React from 'react';

import './App.css';

import RollTable from './components/rollTable'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dice Roller</h1>
        <h3>Click the blue dice icons to roll a die!</h3>
      </header>
      <RollTable/>
    </div>
  );
}

export default App;
