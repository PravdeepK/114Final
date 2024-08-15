import React, {useState} from 'react';
import SearchBar from './SearchBar';
import Header from './Header';
import Footer from './Footer';
import LyricsComponent from './APILyrics';
import DetailsComponent from './APISongDetails';
import SongSearch from './APISearch';
import './App.css';

function App() {
  const [songId, setSongId] = useState(null);

  return (
    <div className="App">
      <Header />
      <SongSearch onSongId={setSongId} />
      {songId && <DetailsComponent songId={songId} />}
      {songId && <LyricsComponent songId={songId} />}
      <Footer />
    </div>
  );
  
}

export default App;
