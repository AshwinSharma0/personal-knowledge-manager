const express = require("express");
const router = express.Router();
const User = require("./routes/User");
const jwt = require("jsonwebtoken");

// REGISTER
router.post("/register", async(req,res)=>{
  try{
    const user = await User.create(req.body);
    res.json(user);
  }catch(err){
    res.status(400).json({error:"User exists"});
  }
});

// LOGIN
router.post("/login", async(req,res)=>{
  const {email,password} = req.body;

  const user = await User.findOne({email});
  if(!user) return res.status(400).json({error:"Invalid email"});

  const ok = await user.matchPassword(password);
  if(!ok) return res.status(400).json({error:"Wrong password"});

  const token = jwt.sign({id:user._id},"secret123",{expiresIn:"7d"});
  res.json({token});
});

module.exports = router;
