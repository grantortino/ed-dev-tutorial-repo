import React, { useState } from 'react';
import './styles/App.scss';
// COMPONENTS
import Player from './components/Player';
import Song from './components/Song';
// Import Util
import data from './util';

function App() {
  // state
  const [songs, setSong] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[3])
  return (
    <div className="App">
      <Song currentSong={ currentSong } />
      <Player />
    </div>
  );
}

export default App;
