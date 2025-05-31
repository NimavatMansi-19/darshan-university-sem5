import {useNavigate,useParams} from "react-router-dom";
import {useState,useEffect} from "react"
function GetAllFac(){
    const nav=useNavigate();
    const apiUrl="https://68356b97cd78db2058c16b2c.mockapi.io/Faculties";
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch(apiUrl)
        .then(res=>res.json())
        .then(res=>setData(res));
    },[]);
    const formData=data.map((fac)=>{
        return <h1 onClick={()=>{
           nav('/faculties/' + fac.FacultyID);


        }}>{fac.FacultyName}</h1>
    });
    return(<>
        {formData}
    </>);
}
export default GetAllFac;