// script.js
// Moved to front-end app
// document.getElementById('playlistForm').addEventListener('submit', function(e) {
//   e.preventDefault();
//   const playlistUrl = document.getElementById('playlistUrl').value;
//   const playlistId = extractPlaylistId(playlistUrl);
//   if (playlistId) {
//       fetchPlaylistJson(playlistId);
//   } else {
//       alert('Invalid Spotify playlist URL');
//   }
// });

// function extractPlaylistId(url) {
//   // Extract the playlist ID from the YouTube URL
//   const match = url.match(/list=([a-zA-Z0-9_-]+)/);
//   return match ? match[1] : null;
// }

// function fetchPlaylistJson(playlistId) {
//   fetch(`/playlist?playlistId=${playlistId}`)
//       .then(response => response.json())
//       .then(data => {
//           const formattedJson = JSON.stringify(data, null, 2);
//           const prettyJson = syntaxHighlight(formattedJson);
//           document.getElementById('playlistJson').innerHTML = prettyJson;
//       })
//       .catch(error => console.error('Error:', error));
// }

// function syntaxHighlight(json) {
//   json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
//   return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|true|false|null|\b-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?\b)/g, function (match) {
//       let cls = 'number';
//       if (/^"/.test(match)) {
//           if (/:$/.test(match)) {
//               cls = 'key';
//           } else {
//               cls = 'string';
//           }
//       } else if (/true|false/.test(match)) {
//           cls = 'boolean';
//       }
//       return '<span class="' + cls + '">' + match + '</span>';
//   });
// }
