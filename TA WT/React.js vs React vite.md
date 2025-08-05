# React: Create React App (CRA) vs. Vite

This guide provides a clear comparison between two popular tools for bootstrapping a new React application: **Create React App (CRA)** and **Vite**. We'll cover their key differences, how to create a project with each, and what their default project structures look like.


## Key Differences at a Glance

The primary difference lies in the underlying build tools and development server architecture, which significantly impacts performance and developer experience.

| Feature                 | Create React App (CRA)                                     | Vite                                                                      |
| ----------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------- |
| **Development Server** | Slower cold start. Bundles the entire app before serving.  | **Extremely fast** cold start. Serves files over native ES Modules (ESM). |
| **Hot Module Reload (HMR)** | Good, but can slow down as the project grows. Performs a full rebundle on change. | **Near-instant HMR**. Only updates the specific module that was changed.      |
| **Philosophy** | A stable, battle-tested, but older approach to bundling web apps. | A modern, lean, and fast approach leveraging modern browser capabilities.     |
|**Extension**| CRA defaults to `.js`|Vite's React template defaults to using the `.jsx` extension for files containing JSX, which is a modern best practice|

---

## Creating a New Project

Here are the commands to scaffold a new React application using both tools.

### 1. Using Create React App (CRA)

CRA uses `npx` (a package runner tool that comes with npm) to run the `create-react-app` script.

```bash
# This command creates a new React project in a folder named "my-cra-app"
npx create-react-app my-cra-app

# Navigate into your new project directory
cd my-cra-app

# Start the development server
npm start
```

### 2. Using Vite

Vite's official project creation tool is `create-vite`. It's an interactive wizard that lets you choose your framework (React, Vue, etc.) and variant (JavaScript/TypeScript).

```bash
# This command starts the interactive setup wizard
npm create vite@latest

# You will be prompted to:
# 1. Enter a project name (e.g., my-vite-app)
# 2. Select a framework (choose 'React')
# 3. Select a variant (choose 'JavaScript' or 'TypeScript')

# --- OR, create a React JS project directly ---
npm create vite@latest my-vite-app -- --template react

# Navigate into your new project directory
cd my-vite-app

# Install the necessary dependencies
npm install

# Start the development server
npm run dev
```

---

## Project Structure Comparison

The most noticeable structural difference is the location of `index.html`.

### CRA Project Structure

In CRA, `index.html` is located inside the `public` folder. The JavaScript entry point is `src/index.js`.

```text
my-cra-app/
├── node_modules/
├── public/
│   ├── favicon.ico
│   ├── index.html         <-- The HTML template file/static files
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.css
│   ├── App.js             <-- The main App component
│   ├── App.test.js
│   ├── index.css
│   ├── index.js           <-- The JS entry point
│   ├── logo.svg
│   └── setupTests.js
├── .gitignore
├── package.json
└── README.md
```

### Vite Project Structure

In Vite, `index.html` is at the **root** of the project and is the true entry point of the application.

```text
my-vite-app/
├── node_modules/
├── public/
│   └── vite.svg           <-- For purely static assets
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.css
│   ├── App.jsx            <-- The main App component (uses .jsx)
│   ├── index.css
│   └── main.jsx           <-- The JS entry point (uses .jsx)
├── .gitignore
├── index.html             <-- The app entry point
├── package.json
├── README.md
└── vite.config.js         <-- Vite configuration file
```


## Conclusion: Which One Should You Use?

**For new projects in 2024 and beyond, Vite is the recommended choice.**

* **Choose Vite if:**
    * You value **development speed**. The fast server start and instant HMR significantly improve the developer experience.
    * You want a **modern toolchain** that leverages native browser features.
    * You want **easy configuration** without the need to "eject".
    * You are aiming for **optimized and smaller production builds**.

* **Choose Create React App if:**
    * You are working on an **older, existing project** that was built with CRA.
    * You have a specific dependency or a complex setup that relies heavily on Webpack and is difficult to migrate.

For nearly all new React applications, Vite offers a faster, leaner, and more enjoyable development workflow.
