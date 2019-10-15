import React from 'react';
import { Game } from './views';
import { CustomProvider } from './controller';

function App() {
  return (
    <CustomProvider>
      <Game />
    </CustomProvider>
  );
}

export default App;
