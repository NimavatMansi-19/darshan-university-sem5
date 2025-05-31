import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import{Link,Outlet,BrowserRouter,Route,Routes} from "react-router-dom";
import GetAllFac from './GetAllFac';
import DetailFac from './DetailFac';
import AddFac from './AddFac';
import EditFac from './EditFac';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Layout(){
  return(<>
    <Link to="/">Home</Link>{" "}
    <Link to="/faculties">All Facs</Link>{" "}
    <Link to="/faculties/add">Add</Link>{" "}
    <br />
      <Outlet />
      <h1>Footer</h1>
    
  </>);
}
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="faculties" element={<GetAllFac />}/>
      <Route path="faculties/add" element={<AddFac />}/>
      <Route path="faculties/:id" element={<DetailFac />}/>
      <Route path="faculties/edit/:id" element={<EditFac />}/>



    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
