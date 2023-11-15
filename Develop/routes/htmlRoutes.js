const path = require('path');
const router = require('express').Router();

// "/notes" are sent to the notes.html file
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// This index.html file interacts with the routes
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
