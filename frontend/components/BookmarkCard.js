export default function BookmarkCard({b,onDelete,onFav}){
  return(
    <div className="border p-4 rounded mb-3 bg-white shadow">
      <div className="flex justify-between">

        <a href={b.url} target="_blank" className="font-bold text-blue-600">
          {b.title || b.url}
        </a>

        <div className="flex gap-2">
          <button onClick={()=>onFav(b)}
            className="text-yellow-500">
            {b.favorite ? "★" : "☆"}
          </button>

          <button onClick={()=>onDelete(b._id)}
            className="text-red-500">
            Delete
          </button>
        </div>
      </div>

      <p className="text-sm">{b.description}</p>
    </div>
  );
}
