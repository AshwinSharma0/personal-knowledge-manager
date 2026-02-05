const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema({
  user:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
  title:String,
  url:String,
  description:String,
  tags:[String],
  favorite:{type:Boolean, default:false}
},{timestamps:true});

module.exports = mongoose.model("Bookmark", bookmarkSchema);
const express = require("express");
const router = express.Router();

let bookmarks = [];

router.get("/", (req, res) => {
  res.json(bookmarks);
});

router.post("/", (req, res) => {
  const { title, url } = req.body;
  const newBookmark = { title, url };
  bookmarks.push(newBookmark);
  res.json(newBookmark);
});

module.exports = router;
