import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function EditFaculty({ data, setData }) {
  const param = useParams();
  const navigate = useNavigate();
  const fac = data.find((f) => f.id === parseInt(param.id));
  const [form, setForm] = useState({ FacultyName: "", FacultySalary: ""});

  useEffect(() => {
    if (fac) setForm(fac);
  }, [fac]);

  const handleUpdate = () => {
    const updated = data.map((d) =>
      d.id === fac.id ? { ...form, FacultySalary: parseInt(form.FacultySalary) } : d
    );
    setData(updated);
    navigate("/faculties");
  };

  return (
    <>
      <h2>Edit Faculty</h2>
      <input value={form.FacultyName} onChange={(e) => setForm({ ...form, FacultyName: e.target.value })} />
      <input value={form.FacultySalary} onChange={(e) => setForm({ ...form, FacultySalary: e.target.value })} />
      <button onClick={handleUpdate}>Update</button>
    </>
  );
}

export default EditFaculty;
