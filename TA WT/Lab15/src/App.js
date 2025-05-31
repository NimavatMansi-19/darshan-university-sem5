import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GetAllFaculty from './GetAllFaculty';
import DetailFaculty from './DetailFaculty';
import AddFaculty from './AddFaculty';
import EditFaculty from './EditFaculty';

function App() {
  const [data, setData] = useState([
    { id: 1, FacultyName: "Darshi", FacultySalary: 50000 },
    { id: 2, FacultyName: "Mansi", FacultySalary: 60000 },
    { id: 3, FacultyName: "Nandu", FacultySalary: 55000 },
    { id: 4, FacultyName: "Shruti", FacultySalary: 50000 },
    { id: 5, FacultyName: "Riya", FacultySalary: 65000 }
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/faculties" element={<GetAllFaculty data={data} />} />
        <Route path="/faculties/:id" element={<DetailFaculty data={data} setData={setData} />} />
        <Route path="/faculties/add" element={<AddFaculty data={data} setData={setData} />} />
        <Route path="/faculties/edit/:id" element={<EditFaculty data={data} setData={setData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
