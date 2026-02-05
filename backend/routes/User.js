const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name:String,
  email:{type:String, unique:true},
  password:String
},{timestamps:true});

userSchema.pre("save", async function(){
  if(!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password,10);
});

userSchema.methods.matchPassword = async function(pw){
  return await bcrypt.compare(pw,this.password);
};

module.exports = mongoose.model("User", userSchema);
