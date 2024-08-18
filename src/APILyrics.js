import React, { useState, useEffect } from 'react';
import './API.css';

const LyricsComponent = ({ songId }) => {
  const [htmlContent, setHtmlContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = '0bc4e94883msh247ee989864616fp1fa657jsn5c235dc407de';
  const url = `https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=${songId}`;

  useEffect(() => {
    if (!songId) return;

    const fetchLyrics = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': 'genius-song-lyrics1.p.rapidapi.com'
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Lyrics API Response:', result); // Log the response

        const htmlContent = result.lyrics?.lyrics?.body
        ? result.lyrics.lyrics.body.html
        : '<p>No lyrics found</p>';

        setHtmlContent(htmlContent);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLyrics();
  }, [songId, url, apiKey]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default LyricsComponent;