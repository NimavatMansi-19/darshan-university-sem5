import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AddFaculty({ data, setData }) {
  const [form, setForm] = useState({ FacultyName: "", FacultySalary: "" });
  const navigate = useNavigate();

  const handleSubmit = () => {
    const newFac = {
      ...form,
      id: data.length ? data[data.length - 1].id + 1 : 1,
      FacultySalary: parseInt(form.FacultySalary)
    };
    setData([...data, newFac]);
    navigate("/faculties");
  };

  return (
    <>
      <h2>Add Faculty</h2>
      <input placeholder="Name" onChange={(e) => setForm({ ...form, FacultyName: e.target.value })} />
      <input placeholder="Salary" onChange={(e) => setForm({ ...form, FacultySalary: e.target.value })} />
      <button onClick={handleSubmit}>Add</button>
    </>
  );
}

export default AddFaculty;
