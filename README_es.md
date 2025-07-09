# React-Router Tutorial

¡Bienvenido a **React-Router Tutorial**!

Este es el archivo README en español. También puedes consultar las versiones en otros idiomas:

- 🇬🇧 [Read in English](README.md)
- 🇺🇦 [Read in Ukrainian](README_uk.md)
- 🇵🇹 [Read in Portuguese](README_pt.md)

## Descripción

Breve proyecto guiado para introducirnos en React-Router

## Características

- Proyecto con páginas y Navbar creado
- Crearemos las rutas que interconecten las diferentes páginas del proyecto
- Montaremos rutas anidadas, rutas normales y rutas secretas.

## Instalación previa

```bash
git clone https://github.com/jemb4/react-rooter-tutorial
cd react-rooter-tutorial
npm install
```

## PASOS

### 1: Instalar react-router

```bash
npm install react-router-dom
```

### 2: Crear archivo routes/Routes.jsx

- Dentro de src crearemos la carpeta routes y dentro el archivo Router.
- En este archivo procederemos a añadir dentro de las etiquetas '< Routes >' todas las rutas creadas.
- Los atributos que usaremos serán **path='/pag'** para indicar la url y **element={< Vista />}**

<details>
  <summary> Ver código en Router.jsx</summary>

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

### 3: Modificaremos App.jsx

Editaremos nuestro App.jsx para ahora utilizar las rutas creadas, para ello lo crearemos de cero ahciendo los siguientes pasos:

- Crearemos un useState allowSecret tipo booleano.
- Devolveremos la etiqueta < BrowserRouter> como padre del html para permitir usar Router.
- Dentro de este padre añadiremos el Navbar, un botón que cambie de estado allowSecret y AppRoutes con el atributo alowSecret.

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

### 4: Editar el Navbar

En Navbar quitaremos todas las anchor tags y las convertiremos en etiquetas < Link >

- Tendrán el atributo **to='/vista'** con la url que queremos que tenga.
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

### 5: Editar User.jsx para habilitar las rutas anidadas

Al igual que en la página del Navbar, ahora cambiaremos los botones por etiquetas '< Link >'. Esta vez el atributo **to** su valor no tendrá '/' al ser etiquetas anidadas.

- Al final del navegador usaremos la etiqueta '< Outlet />', esto nos permitirá mostrar el contenido dentro del componente padre.

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
