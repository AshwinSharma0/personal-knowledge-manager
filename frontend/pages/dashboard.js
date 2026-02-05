import { useEffect, useState } from "react";

export default function Dashboard() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    setUser(loggedUser);
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Dashboard 🎉</h1>

      {user && (
        <h3>Welcome, {user.name}</h3>
      )}

      <br />
      <button onClick={logout}>Logout</button>
    </div>
  );
}
