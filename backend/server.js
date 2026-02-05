const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const authRoutes = require("./authRoutes");   // ⭐ important

const notesRoutes = require("./routes/notes");
const bookmarkRoutes = require("./routes/bookmarks");


const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err));

app.get("/", (req,res)=>{
  res.send("Backend working 🚀");
});

// ⭐ THIS LINE MUST EXIST
app.use("/api/auth", authRoutes);
app.use("/api/notes", notesRoutes);
app.use("/api/bookmarks", bookmarkRoutes);


app.listen(5000, ()=>{
  console.log("Server running on port 5000");
});
