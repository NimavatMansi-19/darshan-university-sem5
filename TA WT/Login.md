# 🚀 ReactJS Login App with `useContext`

This is a simple **ReactJS app** that demonstrates **login/logout functionality** using the **`useContext` hook**.  
It keeps the current user state available throughout the app.

---

## 📂 Project Structure
```
src/
├── App.js # Main App component, loads Login or Dashboard
├── index.js # Entry point of the React app
├── context/
│ └── UserContext.js # Context API file to store user state (login/logout)
└── components/
├── Login.js # Login form with username & password input
└── Dashboard.js # Dashboard shown after login with welcome + logout
```

---

## ⚡ Setup Instructions

1. **Create a new React app**
   ```bash
   npx create-react-app login-app
   cd login-app
## Code
### 📌 context/UserContext.js

```javascript
import { createContext, useState } from "react";

// Create Context
export const UserContext = createContext();

// Simple wrapper with context provider
export const UserContextWrapper = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    if (username === "admin" && password === "1234") {
      setUser({ username });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
```
### 📌 components/Login.js

```javascript
import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const { login } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (!success) {
      setError("Invalid credentials!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-3 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
```

### 📌 components/Dashboard.js

```javascript
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Dashboard = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <h1 className="text-2xl font-bold mb-4">
        Welcome, {user?.username} 🎉
      </h1>
      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
```

### 📌 App.js

```javascript
import { useContext } from "react";
import { UserContext, UserContextWrapper } from "./context/UserContext";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function AppContent() {
  const { user } = useContext(UserContext);
  return user ? <Dashboard /> : <Login />;
}

export default function App() {
  return (
    <UserContextWrapper>
      <AppContent />
    </UserContextWrapper>
  );
}
```
## 🎯 Features

- ✅ Simple **login/logout** functionality  
- ✅ `useContext` for global state management  
- ✅ Fake authentication with static credentials (`admin / 1234`)  
- ✅ Tailwind CSS styling for UI  

---

## 📌 Login Credentials

Use the following credentials to log in:

- **Username:** `admin`  
- **Password:** `1234`  

---

## 📖 Summary

This React app demonstrates how to use the **Context API (`useContext`)** to manage authentication state across the entire application.  
It’s a simple yet powerful example of how to share data between multiple components without prop drilling.  

