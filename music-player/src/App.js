import React from 'react';
import './styles/App.scss';
// COMPONENTS
import Player from './components/Player';
import Song from './components/Song';

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
