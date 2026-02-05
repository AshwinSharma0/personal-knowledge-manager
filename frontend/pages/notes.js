import {useEffect,useState} from "react";
import API from "../services/api";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import NoteCard from "../components/NoteCard";
import SearchBar from "../components/SearchBar";

export default function Notes(){
 const [notes,setNotes]=useState([]);
 const [title,setTitle]=useState("");
 const [search,setSearch]=useState("");

 const fetchNotes = async()=>{
  const res = await API.get(`/notes?q=${search}`);
  setNotes(res.data);
 };

 useEffect(()=>{fetchNotes()},[search]);

 const add = async()=>{
  if(!title) return;
  await API.post("/notes",{title});
  setTitle("");
  fetchNotes();
 };

 const del = async(id)=>{
  await API.delete("/notes/"+id);
  fetchNotes();
 };

 const fav = async(n)=>{
  await API.put("/notes/"+n._id,{favorite:!n.favorite});
  fetchNotes();
 };

 return(
  <div className="flex">
   <Sidebar/>
   <div className="flex-1">
    <Navbar/>

    <div className="p-6">
     <SearchBar setSearch={setSearch}/>

     <div className="flex gap-2 mb-4">
      <input className="border p-2 flex-1"
       value={title}
       onChange={e=>setTitle(e.target.value)}
       placeholder="New note"/>
      <button onClick={add}
       className="bg-blue-600 text-white px-4 rounded">
       Add
      </button>
     </div>

     {notes.map(n=>(
       <NoteCard key={n._id} note={n}
        onDelete={del} onFav={fav}/>
     ))}
    </div>
   </div>
  </div>
 );
}
