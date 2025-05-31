import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function EditFac() {
  const nav = useNavigate();
  const param = useParams();
  const apiUrl = "https://68356b97cd78db2058c16b2c.mockapi.io/Faculties";
  const [data, setData] = useState({
    
  });

  // Fetch data by ID
  useEffect(() => {
    fetch(apiUrl + "/" + param.id)
      .then(res => res.json())
      .then(res => setData(res));
  }, [param.id]);

  

  return (
    <>
      <h2>Edit Faculty</h2>
      <input
        type="text"
        value={data.FacultyName}
        onChange={(e) => setData({ ...data, FacultyName: e.target.value })}
        placeholder="Faculty Name"
      />
      <input
        type="number"
        value={data.FacultyExp}
        onChange={(e) => setData({ ...data, FacultyExp: e.target.value })}
        placeholder="Faculty Experience"
      />
      <input
        type="text"
        value={data.Image}
        onChange={(e) => setData({ ...data, Image: e.target.value })}
        placeholder="Image URL"
      />
      <input
        type="number"
        value={data.FacultyID}
        onChange={(e) => setData({ ...data, FacultyID: e.target.value })}
        placeholder="Faculty ID"
      />
      <input
        type="button"
        value="Save Changes"
        onClick={() => {
          fetch(apiUrl + "/" + param.id, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then(() => {
              nav("/faculties");
            });
        }}
      />
    </>
  );
}

export default EditFac;
