const express = require("express");
const router = express.Router();

let bookmarks = [];

// 🔹 Get bookmarks
router.get("/", (req, res) => {
  res.json(bookmarks);
});

// 🔹 Add bookmark
router.post("/", (req, res) => {
  const { title, url } = req.body;

  const newBookmark = {
    _id: Date.now().toString(),
    title,
    url,
  };

  bookmarks.push(newBookmark);
  res.json(newBookmark);
});

// 🔹 Delete bookmark
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  bookmarks = bookmarks.filter(b => b._id !== id);

  res.json({ message: "Bookmark deleted" });
});

module.exports = router;
