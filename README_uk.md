# Підручник з React-Router

Ласкаво просимо до **React-Router Tutorial**!

Це файл README українською мовою. Ви також можете переглянути версії іншими мовами:

- 🇬🇧 [Read in English](README.md)
- 🇪🇸 [Leer en español](README_es.md)
- 🇵🇹 [Read in Portuguese](README_pt.md)

## Опис

Короткий навчальний проєкт для ознайомлення з React Router.

## Можливості

- Проєкт із заздалегідь створеними сторінками та Navbar
- Створимо маршрути для з'єднання різних сторінок у проєкті
- Налаштуємо вкладені маршрути, звичайні маршрути та секретні маршрути

## Початкова установка

```bash
git clone https://github.com/jemb4/react-rooter-tutorial
cd react-rooter-tutorial
npm install
```

## STEPS

### 1: Встановити React Router

```bash
npm install react-router-dom
```

### 2: Створити файл routes/Routes.jsx

- У папці src створіть папку routes, а в ній файл Routes.jsx.

- У цьому файлі додайте всі маршрути всередину тегу < Routes>.

- Основні пропси, які ми використовуємо: path="/page" для URL та element={< View />} для компонента, який потрібно відобразити.

<details>
  <summary> Переглянути код Router.jsx</summary>

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

### 3: Змінити App.jsx

Редагуємо App.jsx, щоб використовувати створені маршрути. Для цього створюємо його з нуля, виконавши такі кроки:

- Створити стан allowSecret (булевий) за допомогою useState.

- Обгорнути основний вміст у тег < BrowserRouter>, щоб увімкнути React Router.

- Всередині обгортки додати Navbar, кнопку для перемикання allowSecret та AppRoutes із пропсом allowSecret.

<details>
  <summary> Переглянути код App.jx</summary>

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

### 4: Змінити Navbar

У компоненті Navbar видаляємо всі теги < a> і замінюємо їх на < Link>.

- Вони матимуть проп to="/route" із потрібним URL.

<details>
  <summary> Переглянути код Navbar.jsx</summary>

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

### 5: Змінити Users.jsx для підтримки вкладених маршрутів

Так само, як у Navbar, тепер замінюємо кнопки або теги < a> на < Link>. Цього разу проп to не міститиме /, оскільки це вкладені маршрути.

- Наприкінці компонента додаємо тег < Outlet />, який дозволяє відображати дочірній вміст усередині батьківського компонента.

<details>
  <summary> Переглянути код Users.jsx</summary>

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
