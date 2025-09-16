import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API = "https://68356b97cd78db2058c16b2c.mockapi.io/Student";

export default function StudentList() {
  const [students, setStudents] = useState([]);

  // Fetch all students
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  // Delete student
  const handleDelete = (id) => {
    fetch(`${API}/${id}`, { method: "DELETE" }).then(() => {
      fetch(API)
        .then((res) => res.json())
        .then((data) => setStudents(data));
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student List</h2>

      <table border="1" cellPadding="8" cellSpacing="0" width="100%">
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.age}</td>
                <td>
                  <Link to={`/edit/${s.id}`}>
                    <button>Edit</button>
                  </Link>
                  <button onClick={() => handleDelete(s.id)}>Delete</button>{" "}
                  <Link to={`/student/${s.id}`}>
                    <button>Detail</button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" align="center">
                No Students Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
