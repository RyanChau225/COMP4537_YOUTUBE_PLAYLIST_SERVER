const { google } = require("googleapis");
const express = require("express");
const router = express.Router();
const auth = require("./middleware/jwt-auth");
const jwt = require("jsonwebtoken");
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, PUT, POST, DELETE, PATCH, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Request-With"
  );
  next();
});

const youtube = google.youtube({
  version: "v3",
  auth: process.env.YOUTUBE_API_KEY, // Your API key
});

router.get("/playlist", auth, async (req, res) => {
  const playlistId = req.query.playlistId; // Extracted from the URL

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
    res.json(playlistItems.data);
  } catch (error) {
    res.status(500).send("Error fetching YouTube playlist");
  }
});

module.exports = router;
