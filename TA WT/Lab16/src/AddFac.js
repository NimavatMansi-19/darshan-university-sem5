import {useNavigate,useParams} from "react-router-dom";
import {useState,useEffect} from "react"
function AddFac(){
    const nav=useNavigate();
    const apiUrl="https://68356b97cd78db2058c16b2c.mockapi.io/Faculties";
    const [data,setData]=useState({FacultyName:""});
    
    return(<>
        <input type="text" onChange={(e)=>{
            setData({...data,FacultyName:e.target.value});
        }}/>
        <input type="number" onChange={(e)=>{
            setData({...data,FacultyExp:e.target.value});
        }}/>
        <input type="text" onChange={(e)=>{
            setData({...data,Image:e.target.value});

        }}/>
        <input type="number" onChange={(e)=>{
            setData({...data,FacultyID:e.target.value});
        }}/>
        <input type="button" value="Add"
        onClick={()=>{
            fetch(apiUrl,{
                method:"POST",
                body:JSON.stringify(data),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then((res)=>{
                nav('/faculties');
            })
        }}></input>
    </>)
}
export default AddFac;