const router = require('express').Router();
const store = require('../db/store');
const { v1: uuidv1 } = require('uuid');

// Your code using uuidv1 remains the same.
// For example:
const myUuid = uuidv1();

// This gets all the notes
router.get('/notes', (req, res) => {
    store
      .getNotes()
      .then((notes) => {
        return res.json(notes);
      })
      .catch((err) => res.status(500).json(err));
  });
  //This post the notes
  router.post('/notes', (req, res) => {
    store
      .addNote(req.body)
      .then((note) => res.json(note))
      .catch((err) => res.status(500).json(err));
  });
  
  // This deletes unwanted notes
  router.delete('/notes/:id', (req, res) => {
    store
      .removeNote(req.params.id)
      .then(() => res.json({ ok: true }))
      .catch((err) => res.status(500).json(err));
  });
  
  module.exports = router;
  