import {useState} from "react";
import API from "../services/api";
import {useRouter} from "next/router";

export default function Login(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const router = useRouter();

  const login = async()=>{
    const res = await API.post("/auth/login",{email,password});
    localStorage.setItem("token",res.data.token);
    router.push("/notes");
  };

  return(
    <div style={{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center"}}>
      <div>
        <h2>Login</h2>
        <input placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
        <br/><br/>
        <input placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
        <br/><br/>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}
