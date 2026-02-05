const express = require("express");
const router = express.Router();

let notes = [];

// 🔹 Get all notes + search
router.get("/", (req, res) => {
  const { q } = req.query;

  if (q) {
    const filtered = notes.filter(n =>
      n.title.toLowerCase().includes(q.toLowerCase()) ||
      n.content.toLowerCase().includes(q.toLowerCase())
    );
    return res.json(filtered);
  }

  res.json(notes);
});

// 🔹 Add note
router.post("/", (req, res) => {
  const { title, content } = req.body;

  const newNote = {
    _id: Date.now().toString(),
    title,
    content,
    favorite: false
  };

  notes.push(newNote);
  res.json(newNote);
});

// 🔹 Update note (favorite/edit)
router.put("/:id", (req, res) => {
  const { id } = req.params;

  notes = notes.map(n =>
    n._id === id ? { ...n, ...req.body } : n
  );

  res.json({ message: "Updated" });
});

// 🔹 Delete note
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  notes = notes.filter(n => n._id !== id);

  res.json({ message: "Deleted" });
});

module.exports = router;
