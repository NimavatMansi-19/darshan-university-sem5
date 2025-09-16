import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API = "https://68356b97cd78db2058c16b2c.mockapi.io/Student";

export default function EditStudent() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  // Load current student
  useEffect(() => {
    fetch(`${API}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setAge(data.age);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, age }),
    })
      .then((res) => res.json())
      .then(() => navigate("/"));
  };

  return (
    <div>
      <h2>Edit Student</h2>
      <form onSubmit={handleUpdate}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
