const { google } = require('googleapis');
const express = require('express');
const router = express.Router();

const youtube = google.youtube({
  version: 'v3',
  auth: process.env.YOUTUBE_API_KEY // Your API key
});

router.get('/playlist', async (req, res) => {
  const playlistId = req.query.playlistId; // Extracted from the URL

  try {
    const response = await youtube.playlists.list({
      part: 'snippet',
      id: playlistId
    });
    const playlistItems = await youtube.playlistItems.list({
      part: 'snippet',
      playlistId: playlistId,
      maxResults: 50 // Adjust as needed
    });
    res.json(playlistItems.data);
  } catch (error) {
    res.status(500).send('Error fetching YouTube playlist');
  }
});

module.exports = router;
