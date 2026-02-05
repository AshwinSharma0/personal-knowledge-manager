const express = require("express");
const router = express.Router();
const Note = require("./Note");
const auth = require("../middleware/auth");

// CREATE
router.post("/", auth, async(req,res)=>{
  const note = await Note.create({
    ...req.body,
    user:req.user
  });
  res.json(note);
});

// GET USER NOTES
router.get("/", auth, async(req,res)=>{
  const {q,tags,fav} = req.query;

  let filter={user:req.user};

  if(q){
    filter.$or=[
      {title:{$regex:q,$options:"i"}},
      {content:{$regex:q,$options:"i"}}
    ];
  }

  if(tags){
    filter.tags={$in:tags.split(",")};
  }

  if(fav==="true"){
    filter.favorite=true;
  }

  const notes = await Note.find(filter).sort({createdAt:-1});
  res.json(notes);
});

// UPDATE
router.put("/:id", auth, async(req,res)=>{
  const note = await Note.findOneAndUpdate(
    {_id:req.params.id, user:req.user},
    req.body,
    {new:true}
  );
  res.json(note);
});

// DELETE
router.delete("/:id", auth, async(req,res)=>{
  await Note.findOneAndDelete({_id:req.params.id,user:req.user});
  res.json({msg:"Deleted"});
});

module.exports = router;
