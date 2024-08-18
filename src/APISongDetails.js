import React, { useState, useEffect } from 'react';

const DetailsComponent = ({ songId }) => {
  const [data, setData] = useState(null); // State for storing the fetched data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for storing errors

  const url = `https://genius-song-lyrics1.p.rapidapi.com/song/details/?id=${songId}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '0bc4e94883msh247ee989864616fp1fa657jsn5c235dc407de',
      'x-rapidapi-host': 'genius-song-lyrics1.p.rapidapi.com'
    }
  };

  useEffect(() => {
    if(!songId) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url, options);
        
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const result = await response.json(); // Parse JSON response
        setData(result); // Update state with the fetched data
      } catch (error) {
        setError(error.message); // Update state with the error message
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchData();
  }, [songId, url]); // Dependency array ensures effect runs only once

  if (loading) return <p>Loading...</p>; // Display loading message
  if (error) return <p>Error: {error}</p>; // Display error message if any

  // Render the data if available
  return (
    <div>
      {data && (
        <div>
          <h2>{data.song?.title || 'Title not available'} - {data.song?.artist_names || 'Artist not available'}</h2>
        </div>
      )}
    </div>
  );
};

export default DetailsComponent;