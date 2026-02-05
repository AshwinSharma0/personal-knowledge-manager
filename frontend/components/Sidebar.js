import Link from "next/link";

export default function Sidebar(){
  return(
    <div className="w-60 bg-gray-800 text-white h-screen p-5">
      <h2 className="text-xl mb-6 font-bold">Dashboard</h2>

      <ul className="space-y-3">
        <li><Link href="/notes">📝 Notes</Link></li>
        <li><Link href="/bookmarks">🔖 Bookmarks</Link></li>
      </ul>
    </div>
  );
}
