import  {useNavigate} from 'react-router-dom';

function GetAllFaculty({data}){
    const navigate = useNavigate();

    const formattedData = data.map((fac)=>{
        return(
        <h1 onClick={()=>{navigate('/faculties/'+fac.id)}}>
            {fac.FacultyName}
        </h1>
        )
    })
    return(
        <h1>List of Faculties
        {formattedData}
        </h1>
    )
}
export default GetAllFaculty;