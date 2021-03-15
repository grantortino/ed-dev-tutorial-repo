import React, { useState } from 'react';
import './styles/App.scss';
// COMPONENTS
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
// Import Util
import data from './util';

function App() {
  // state
  const [songs, setSong] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={ currentSong } />
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} />
      <Library songs={songs} />
    </div>
  );
}

export default App;
