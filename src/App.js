import React, { useState } from 'react';
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
    <div className="app-container">
      <Header />
      <div className="content-wrapper">
        <SongSearch onSongId={setSongId} />
        {songId && <LyricsComponent songId={songId} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
