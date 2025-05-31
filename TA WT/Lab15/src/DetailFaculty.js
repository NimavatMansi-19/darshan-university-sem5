import { useNavigate, useParams } from "react-router-dom";

function DetailFaculty({ data, setData }) {
  const navigate = useNavigate();
  const param = useParams();
  const fac = data.find((d) => d.id === parseInt(param.id));

  const handleDelete = () => {
    const updated = data.filter((d) => d.id !== fac.id);
    setData(updated);
    navigate("/faculties");
  };

  return (
    <>
      <h2>Faculty Detail</h2>
      <h3>Name: {fac.FacultyName}</h3>
      <h3>Salary: {fac.FacultySalary}</h3>
      <br />
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => navigate("/faculties/edit/" + fac.id)}>Edit</button>
    </>
  );
}

export default DetailFaculty;
