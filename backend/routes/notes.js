const express = require("express");
const router = express.Router();

let notes = [];

router.get("/", (req, res) => {
  res.json(notes);
});

router.post("/", (req, res) => {
  const { title, content } = req.body;
  const newNote = { title, content };
  notes.push(newNote);
  res.json(newNote);
});

module.exports = router;
