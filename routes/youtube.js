const { google } = require("googleapis");
const express = require("express");
const router = express.Router();

const youtube = google.youtube({
  version: "v3",
  auth: process.env.YOUTUBE_API_KEY, // Your API key
});

router.post("/playlist", async (req, res) => {
  let playlistId = req.body.playlistId; // Extracted from the body

  try {
    const response = await youtube.playlists.list({
      part: "snippet",
      id: playlistId,
    });
    const playlistItems = await youtube.playlistItems.list({
      part: "snippet",
      playlistId: playlistId,
      maxResults: 50, // Adjust as needed
    });
    res.status(200).json(playlistItems.data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching YouTube playlist");
  }
});

module.exports = router;
