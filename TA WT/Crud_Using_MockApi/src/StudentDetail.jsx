import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API = "https://68356b97cd78db2058c16b2c.mockapi.io/Student";

export default function StudentDetail() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetch(`${API}/${id}`)
      .then((res) => res.json())
      .then((data) => setStudent(data));
  }, [id]);

  if (!student) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Student Details</h2>
      <p><strong>ID:</strong> {student.id}</p>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Age:</strong> {student.age}</p>
      <Link to="/">Back to List</Link>
    </div>
  );
}
