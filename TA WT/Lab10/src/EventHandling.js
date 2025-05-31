import { useState } from "react";

function EventHandling(){
    const [msg,setMsg]=useState("");
function handleClick(){
    setMsg("Event rendered")
   };
   return(
    <div>
    <p>{msg}</p>
    <button onClick={handleClick}>Click</button>
   </div>

   )

}
export default EventHandling;
