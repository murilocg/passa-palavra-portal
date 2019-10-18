import React from 'react';
import { CustomProvider } from './controller';
import Views from './views';

const App = () => (
  <CustomProvider>
    <Views />
  </CustomProvider>
);

export default App;
