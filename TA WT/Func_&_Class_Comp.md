
# React Components Overview

This guide explains the two main types of components in React:

---

## 1️⃣ Functional Component

Functional components are simple JavaScript functions that return JSX.

### ✅ Syntax

```jsx
// File: MyFunctionComponent.js
import React from 'react';

function MyFunctionComponent() {
  return <h2>Hello from Functional Component</h2>;
}

export default MyFunctionComponent;
```

### 🔗 Link with App.js

```jsx
// File: App.js
import React from 'react';
import MyFunctionComponent from './MyFunctionComponent';

function App() {
  return (
    <div>
      <MyFunctionComponent />
    </div>
  );
}

export default App;
```

---

## 2️⃣ Class Component

Class components use ES6 classes and have lifecycle methods.

### ✅ Syntax

```jsx
// File: MyClassComponent.js
import React, { Component } from 'react';

class MyClassComponent extends Component {
  render() {
    return <h2>Hello from Class Component</h2>;
  }
}

export default MyClassComponent;
```

### 🔗 Link with App.js

```jsx
// File: App.js
import React from 'react';
import MyClassComponent from './MyClassComponent';

function App() {
  return (
    <div>
      <MyClassComponent />
    </div>
  );
}

export default App;
```

---

✅ **Note**: You can use both types in the same project. Functional components are preferred for modern development, especially with hooks.
