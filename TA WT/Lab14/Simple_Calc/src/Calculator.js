import { useState } from "react";
function Calculator(){
   const [num1,setNum1] = useState('')
   const [num2,setNum2] = useState('')
   const [result,setResult] = useState('')

   const handleAddition = ()=>{
    setResult(Number(num1)+Number(num2))
   }
   const handleSubtraction = ()=>{
    setResult(Number(num1)-Number(num2))
   }

   const handleMultiplication= ()=>{
    setResult(Number(num1)*Number(num2))
   }
   const handleDivision = ()=>{
    setResult(Number(num1)/Number(num2))
   }
   const handleClear = ()=>{
     setNum1('')
     setNum2('')
     setResult('')
   }
   return(
    <div>
        <input 
        type="number"
        value = {num1}
        onChange={(e)=>setNum1(e.target.value)}
        />

        <input
        type="number"
        value={num2}
        onChange={(e)=>setNum2(e.target.value)}
        />
        <br/>
        <button onClick={handleAddition}>+</button>
         <button onClick={handleSubtraction}>-</button>
          <button onClick={handleMultiplication}>*</button>
           <button onClick={handleDivision}>/</button>
           <button onClick={handleClear}>Clear</button>
        {result}
    </div>
   )
}
export default Calculator;