import React from 'react';
import GameContainer from './views/game/GameContainer';
import { CustomProvider } from './redux'
import './App.css';

function App() {
  return (
    <CustomProvider>
      <GameContainer />
    </CustomProvider>
  );
}

export default App;
