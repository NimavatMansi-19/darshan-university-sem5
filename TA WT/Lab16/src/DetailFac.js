import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function DetailFac() {
  const nav = useNavigate();
  const param = useParams();
  const apiUrl = "https://68356b97cd78db2058c16b2c.mockapi.io/Faculties";
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(apiUrl + "/" + param.id, { method: "GET" })
      .then(res => res.json())
      .then(res => setData(res));
  }, [param.id]);

  if (!data.FacultyName) return <p>Loading...</p>;

  return (
    <>
      <h1>FacName: {data.FacultyName}</h1>
      <h1>FacExp: {data.FacultyExp}</h1>
      <img src={data.Image} alt="Faculty" />
      <br />
      <button onClick={() => {
        fetch(apiUrl + "/" + param.id, { method: "DELETE" })
          .then(() => {
            nav('/faculties');
          });
      }}>Delete</button>
      <button onClick={() => {
        nav('/faculties/edit/' + param.id);
      }}>Edit</button>
    </>
  );
}

export default DetailFac;
