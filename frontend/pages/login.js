import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const loginUser = async ()=>{
    try{
      const res = await axios.post("http://localhost:5000/api/auth/login",{email,password});
      localStorage.setItem("user", JSON.stringify(res.data));
      window.location.href="/dashboard";
    }catch{
      alert("Invalid login");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-black">

      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-96 border border-white/20">
        
        <h1 className="text-3xl font-bold text-center mb-6 text-white">
          Welcome Back 👋
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-lg bg-slate-800 text-white outline-none"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded-lg bg-slate-800 text-white outline-none"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          onClick={loginUser}
          className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded-lg font-semibold">
          Login
        </button>

        <p className="text-gray-400 text-center mt-4">
          New user? <a href="/register" className="text-
