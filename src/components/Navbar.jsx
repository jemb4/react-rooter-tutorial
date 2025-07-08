export default function Navbar({ setPage }) {
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <button onClick={() => setPage("home")} style={{ marginRight: "10px" }}>
        Home
      </button>
      <button onClick={() => setPage("users")} style={{ marginRight: "10px" }}>
        Usuarios
      </button>
    </nav>
  );
}