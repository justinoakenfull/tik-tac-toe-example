import React from 'react';
import Game from './components/game';
import AccentColourPicker from './components/colourwheel';
import './App.css';
import './styles.css';

export default function App() {
  return (
    <>
      <div className='App-header'>
        <h1>Tik Tac Toe Example</h1>
        <AccentColourPicker />
      </div>
      <Game />
    </>
  )
}


