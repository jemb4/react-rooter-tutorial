export default function Users({ setSubPage }) {
  return (
    <div>
      <h1>Usuarios</h1>
      <button onClick={() => setSubPage("user1")} style={{ marginRight: "10px" }}>
        Usuario 1
      </button>
      <button onClick={() => setSubPage("user2")}>Usuario 2</button>
    </div>
  );
}