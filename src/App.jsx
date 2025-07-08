import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import User1 from "./pages/User1";
import User2 from "./pages/User2";
import Secret from "./pages/Secret";
import NotFound from "./pages/NotFound";

export default function App() {
  const [page, setPage] = useState("home");
  const [subPage, setSubPage] = useState(null);
  const [showSecret, setShowSecret] = useState(false);

  let content;

  if (page === "home") {
    content = <Home />;
  } else if (page === "users") {
    if (subPage === "user1") {
      content = <User1 />;
    } else if (subPage === "user2") {
      content = <User2 />;
    } else {
      content = <Users setSubPage={setSubPage} />;
    }
  } else if (page === "secret" && showSecret) {
    content = <Secret />;
  } else {
    content = <NotFound />;
  }

  return (
    <>
      <Navbar setPage={setPage} />
      <button
        onClick={() => {
          setShowSecret(true);
          setPage("secret");
        }}
        style={{ margin: "10px", padding: "8px" }}
      >
        Ir a página secreta
      </button>
      {content}
    </>
  );
}