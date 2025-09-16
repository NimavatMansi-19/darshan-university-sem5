import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StudentList from "./StudentList";
import AddStudent from "./AddStudent";
import EditStudent from "./EditStudent";
import StudentDetail from "./StudentDetail";

function App() {
  return (
    <Router>
      <div style={{ padding: 20 }}>
        <h1>Student CRUD with Routing</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/add">Add Student</Link>
        </nav>

        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/edit/:id" element={<EditStudent />} />
            <Route path="/student/:id" element={<StudentDetail />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
