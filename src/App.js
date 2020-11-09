import React from 'react';
import { useDispatch } from 'react-redux';
import { loadGames } from './actions/gamesAction';

// Components and pages
import Home from './pages/Home';

function App() {

  return (
    <div className="App">
      <h1>Hello Ignite</h1>
      <Home />
    </div>
  );
}

export default App;
