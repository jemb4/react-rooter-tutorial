# Tutorial de React-Router

Bem-vindo ao **React-Router Tutorial**!

Este é o arquivo README em português. Você também pode conferir as versões em outros idiomas:

- 🇬🇧 [Read in English](README.md)
- 🇪🇸 [Leer en español](README_es.md)
- 🇺🇦 [Ler em ucraniano](README_uk.md)

## Descrição

Um projeto guiado e curto para introduzir o React Router.

## Funcionalidades

- Projeto com páginas e Navbar já criados
- Vamos criar rotas para conectar as diferentes páginas do projeto
- Vamos configurar rotas aninhadas, rotas normais e rotas secretas

## Instalação inicial

```bash
git clone https://github.com/jemb4/react-rooter-tutorial
cd react-rooter-tutorial
npm install
```

## PASSOS

### 1: Instalar o react-router

```bash
npm install react-router-dom
```

### 2: Criar o arquivo routes/Routes.jsx

- Dentro da pasta src, crie a pasta routes e, dentro dela, o arquivo Routes.jsx.

- Nesse arquivo, vamos adicionar todas as rotas dentro da tag < Routes>.

- As props principais que usamos são path="/pagina" para a URL e element={< View />} para o componente a ser renderizado.

<details>
  <summary> Ver código do Router.jsx</summary>

```jsx
import { Routes, Route } from "react-router-dom";
import Home from "..//pages/Home";
import Users from "../pages/Users";
import User1 from "../pages/User1";
import User2 from "../pages/User2";
import Secret from "../pages/Secret";
import NotFound from "../pages/NotFound";

export default function AppRoutes({ allowSecret }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />}>
        <Route path="user1" element={<User1 />} />
        <Route path="user2" element={<User2 />} />
      </Route>
      {allowSecret && <Route path="/secret" element={<Secret />} />}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
```

</details>

### 3: Modificar o App.jsx

Vamos editar o App.jsx para usar as rotas criadas. Para isso, criaremos do zero seguindo os seguintes passos:

- Criar o estado allowSecret (booleano) usando useState.

- Envolver o conteúdo principal na tag < BrowserRouter> para habilitar o React Router.

- Dentro do wrapper, adicionar o Navbar, um botão para alternar o estado allowSecret e o componente AppRoutes passando a prop allowSecret.

<details>
  <summary> Ver código de App.jx</summary>

```jsx
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import Navbar from "./components/Navbar";
import { useState } from "react";

export default function App() {
  const [allowSecret, setAllowSecret] = useState(false);

  return (
    <BrowserRouter>
      <Navbar />
      <button
        onClick={() => setAllowSecret(!allowSecret)}
        style={{ margin: "10px", padding: "8px" }}
      >
        {!allowSecret ? "Permitir página secreta" : "Quitar permisos"}
      </button>
      <AppRoutes allowSecret={allowSecret} />
    </BrowserRouter>
  );
}
```

</details>

### 4: Editar o Navbar

No Navbar, vamos remover todas as tags < a > e substituí-las por < Link>.

- Elas terão a prop to="/rota" com o URL desejado.

<details>
  <summary> Ver código de Navbar.jsx</summary>

```jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ marginRight: "10px" }}>
        Home
      </Link>
      <Link to="/users" style={{ marginRight: "10px" }}>
        Usuarios
      </Link>
      <Link to="/secret" style={{ marginRight: "10px" }}>
        Secreta
      </Link>
    </nav>
  );
}
```

</details>

### 5: Editar User.jsx para suportar rotas aninhadas

Assim como no Navbar, agora vamos substituir os botões ou `<a>` por `<Link>`. Desta vez, a prop to não terá /, pois são rotas aninhadas.

- No final do componente, usamos a tag `<Outlet />`, que permite renderizar o conteúdo filho dentro do componente pai.

<details>
  <summary> Ver código de Users.jsx</summary>

```jsx
import { Link, Outlet } from "react-router-dom";

export default function Users() {
  return (
    <div>
      <h1>Usuarios</h1>
      <nav>
        <Link to="user1" style={{ marginRight: "10px" }}>
          Usuario 1
        </Link>
        <Link to="user2">Usuario 2</Link>
      </nav>
      <Outlet />
    </div>
  );
}
```

</details>
