import React, { useState } from 'react';

export const SongSearch = ({ onSongId }) => {
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = '0bc4e94883msh247ee989864616fp1fa657jsn5c235dc407de';

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    
    const url = `https://genius-song-lyrics1.p.rapidapi.com/search?q=${encodeURIComponent(title)}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'genius-song-lyrics1.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Search API Response:', result); // Log the response

      const song = result.hits[0]?.result;
      if (song) {
        onSongId(song.id); // Pass the song ID to App.js
      } else {
        setError('No song found with the given title.');
        onSongId(null); // Reset song ID if no song is found
      }
    } catch (error) {
      setError(error.message);
      onSongId(null); // Reset song ID on error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Search for a Song</h1>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Enter song title"
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default SongSearch;