import {useState,useEffect} from "react";
import API from "../services/api";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import BookmarkCard from "../components/BookmarkCard";

export default function Bookmarks(){
 const [url,setUrl]=useState("");
 const [data,setData]=useState([]);

 const fetchData = async()=>{
  const res = await API.get("/bookmarks");
  setData(res.data);
 };

 useEffect(()=>{fetchData()},[]);

 const add = async()=>{
  await API.post("/bookmarks",{url});
  setUrl("");
  fetchData();
 };

 const del = async(id)=>{
  await API.delete("/bookmarks/"+id);
  fetchData();
 };

 const fav = async(b)=>{
  await API.put("/bookmarks/"+b._id,{favorite:!b.favorite});
  fetchData();
 };

 return(
  <div className="flex">
   <Sidebar/>
   <div className="flex-1">
    <Navbar/>

    <div className="p-6">
     <div className="flex gap-2 mb-6">
      <input className="border p-2 flex-1"
       placeholder="Paste URL"
       value={url}
       onChange={e=>setUrl(e.target.value)}
      />
      <button onClick={add}
       className="bg-green-600 text-white px-4 rounded">
       Save
      </button>
     </div>

     {data.map(b=>(
      <BookmarkCard key={b._id} b={b}
       onDelete={del} onFav={fav}/>
     ))}
    </div>
   </div>
  </div>
 );
}
