
# ReactJS Array Display Examples using `map()`

In ReactJS, the **`map()` method** is often used to iterate over an array and display its elements in the UI.  
It is a clean and efficient way to render lists dynamically.

## Difference between `map()` and `for` loop in JavaScript

1. **Return Value**  
   - `map()` creates a **new array** with the results of applying a function to each element.  
   - `for` loop does **not return** anything automatically, it just executes code repeatedly.

2. **Usage in React**  
   - `map()` is mostly used in **ReactJS** to directly return JSX elements while rendering lists.  
   - `for` loop cannot directly return JSX inside rendering; it requires extra steps like pushing elements into an array first.
# Real-Life Example: Difference between `for` and `map()` in JavaScript

Suppose we have an array of **students' marks** and we want to add **5 bonus marks** to each student.

---

## 🔹 Using `for` loop
```jsx
const marks = [40, 50, 60, 70];
let updatedMarksFor = [];

for (let i = 0; i < marks.length; i++) {
  updatedMarksFor.push(marks[i] + 5);
}

console.log("Using for loop:", updatedMarksFor);
// Output: [45, 55, 65, 75]


```
## ✅ Explanation:

-Start with an empty array updatedMarksFor.

-Loop through each mark using for.

-Add 5 bonus marks and push into the new array.

-Requires manual steps and more code.
## 🔹 Using `map()` method
```jsx
const marks = [40, 50, 60, 70];

const updatedMarksMap = marks.map(mark => mark + 5);

console.log("Using map():", updatedMarksMap);
// Output: [45, 55, 65, 75]
```
## ✅ Explanation:

-map() directly applies the function (mark + 5) to each element.

-Returns a new array automatically.

-Code is cleaner and shorter.

## 1. Demonstrate the use of map method in ReactJS to display array. (A)

### Explanation:
- We create an array of fruits.
- Use the `map()` method to loop through each fruit and display it as a list item.
- Each list item requires a unique `key` (here we use `index`).

### Code:
```jsx
import React from "react";

function App() {
  const fruits = ["Apple", "Banana", "Mango", "Orange"];

  return (
    <div>
      <h2>Fruits List</h2>
      <ul>
        {fruits.map((fruit, index) => ( //<= if you want to render html inside jsx then use () else {}
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;



```
# Importance of `index` in the `map()` Method

When using the `map()` method in ReactJS, each item in the list needs a **unique `key`**.  
This helps React identify which items have changed, been added, or removed, making the rendering process faster and more efficient.
## 2.Display Faculties stored in array using ReactJS. (B)

```jsx
import React from "react";

function FacultyList() {
  const faculties = ["Dr. Sharma", "Prof. Mehta", "Dr. Patel", "Prof. Desai"];

  return (
    <div>
      <h2>Faculty Members</h2>
      <ul>
        {faculties.map((faculty, index) => (
          <li>{faculty}</li>
        ))}
      </ul>
    </div>
  );
}

export default FacultyList;

```
