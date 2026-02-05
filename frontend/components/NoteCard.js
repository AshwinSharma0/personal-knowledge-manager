export default function NoteCard({note,onDelete,onFav}){
  return(
    <div className="border p-4 rounded mb-3 bg-white shadow">
      <div className="flex justify-between">
        <h3 className="font-bold">{note.title}</h3>

        <div className="flex gap-2">
          <button onClick={()=>onFav(note)}
            className="text-yellow-500">
            {note.favorite ? "★" : "☆"}
          </button>

          <button onClick={()=>onDelete(note._id)}
            className="text-red-500">
            Delete
          </button>
        </div>
      </div>

      <p className="text-sm mt-2">{note.content}</p>
    </div>
  );
}
