# ReactJS App with Login Functionality (Property Drilling)

## 🔹 What is Property Drilling?
Property drilling means passing data from parent → child → grandchild using **props**.

---

## 🔹 Real Life Example
👵 Grandma → 👩 Mom → 👧 Child → 🧸 Toy  

- Grandma has **money (state)**.  
- Child needs it → Grandma gives it to Mom → Mom gives it to Child.  
- Finally, Child uses the money.  

Here, **money = state**, and **passing step by step = property drilling**.

---

## 🔹 Components
1. **App.js** → Holds `user` state.  
2. **Login.js** → Lets user log in.  
3. **Dashboard.js** → Shows welcome message, passes user further.  
4. **Profile.js** → Displays user details.  

---

## 🔹 Code

### App.js
```jsx
import React, { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <h1>React Property Drilling Example</h1>
      {!user ? <Login setUser={setUser} /> : <Dashboard user={user} setUser={setUser} />}
    </div>
  );
}

export default App;
