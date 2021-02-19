import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global.js'

import Routes from './routes/routes';

function App() {
  return (
    <Router>
      <Routes/> 

      <GlobalStyle/>
    </Router>
  );
}

export default App;
