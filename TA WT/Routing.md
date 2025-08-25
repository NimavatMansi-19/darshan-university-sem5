# ReactJS Routing — Theory & Example

## 📌 1. Implement Routing in ReactJS (A)

### What is Routing?
Routing in ReactJS allows you to navigate between **different views (components/pages)** without reloading the entire application.  
It is done using the **`react-router-dom`** library.

**Key Components of React Router DOM (v6):**
- **`<BrowserRouter>`** → Wraps the app to enable routing.
- **`<Routes>`** → Container for all route definitions.
- **`<Route>`** → Defines a path (`/about`) and which component to render.
- **`<Link>` / `<NavLink>`** → Used for navigation without page reloads.
- **`<Outlet>`** → Placeholder to render child routes inside a layout.
- **`useNavigate`** → Programmatic navigation after actions (like form submission).

---


Advantages:
- Centralized management of routes and navigation.
- Easy to add/remove pages.
- Reusable layout with a common **header, footer, sidebar**.

---

## ✅ Example Demonstration 

This is the **core routing setup** (Home, About, Contact, and 404 Page).

### 1. Install Dependencies

```bash
npm create vite@latest react-routing-demo -- --template react
cd react-routing-demo
npm install react-router-dom
npm run dev
# ReactJS Routing — BrowserRouter Explained
```
## 📌 Code Example
### 📌 File: `src/Index.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```
### 📌 File: `src/App.jsx`

```jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
```
### 📌 File: `src/components/Lauout.jsx`



```jsx
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>      // <- You can use <Link>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>

      <main>
        {/* Renders the matching child route */}
        <Outlet />
      </main>

      <footer>
        <p>© {new Date().getFullYear()} My Website</p>
      </footer>
    </>
  );
}

 React Router — About Page Component
```
### 📌 File: `src/pages/About.jsx`

```jsx
export default function About() {
  return <h1>About Page</h1>;
}
```
```


         ┌───────────────┐
         │    <Link>     │  (User clicks "About")
         └───────┬───────┘
                 │
                 ▼
         URL changes to "/about"
                 │
                 ▼
        ┌─────────────────┐
        │  BrowserRouter   │  (Listens to URL changes)
        └───────┬─────────┘
                 │
                 ▼
         Checks all <Routes>
                 │
     ┌───────────┼──────────────────┐
     ▼           ▼                  ▼
Route "/"    Route "/about"    Route "/contact"
(Home)       (About Page)      (Contact Page)
     │
     ▼
Component Rendered

```
## 🎯 Conclusion

ReactJS Routing (using **react-router-dom**) allows us to build **Single Page Applications (SPAs)** where navigation between pages happens smoothly **without refreshing the browser**.

- We set up routing with `<BrowserRouter>`, `<Routes>`, and `<Route>`.  
- Created a reusable **Layout** with `<NavLink>` for navigation, `<Outlet>` for child routes, and a footer.  
- Added multiple pages: **Home, About, Contact**, and a **NotFound (404)** page.  
- Understood the difference between `<Link>` (simple navigation) and `<NavLink>` (navigation + active styling).  

👉 With this setup, you now have a **scalable project structure** where new pages can be added easily, and the layout keeps your app consistent.  

🚀 In short: **React Router makes navigation simple, dynamic, and user-friendly — the backbone of modern React applications.**
