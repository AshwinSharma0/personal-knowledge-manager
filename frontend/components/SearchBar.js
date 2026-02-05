export default function SearchBar({setSearch}){
  return(
    <input
      className="border p-2 w-full mb-4"
      placeholder="Search..."
      onChange={(e)=>setSearch(e.target.value)}
    />
  );
}
