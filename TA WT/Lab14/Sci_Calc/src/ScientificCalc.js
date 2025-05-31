import { useState } from "react";

function ScientificCalc(){
    const [num1,setNum1] = useState('')
    const [num2,setNum2] = useState('')
    const [operator,setOperator] = useState('')
    const [result, setResult] = useState('')

    const calculation = () => {
    const a = parseFloat(num1)
    const b = parseFloat(num2)
    let res = ''

    switch(operator ){
        case '+':
            res = a+b
            break
        case '-':
            res = a-b
            break
        case '*':
            res = a*b
            break
        case '/':
            res = a/b
            break
        case 'sin':
            res = Math.sin(a)
            break;
        case 'cos':
            res=Math.cos(a);
            break;
        case 'tan':
            res=Math.tan(a);
            break;
        case 'sqrt':
            res = Math.sqrt(a);
            break;
        case 'log':
            res = Math.log10(a)
            break;
        default:
            res = 'This is invalid'
    }
    setResult(res)
    } 
    const handleClear = ()=>{
        setNum1('')
        setNum2('')
        setOperator('')
        setResult('')
    }
    return(
        <div>
        <input 
        type="number"
        value={num1}
        onChange={(e)=>setNum1(e.target.value)}
        />
        <input
        type="number"
        value={num2}
        onChange={(e)=>setNum2(e.target.value)}
        />

        <button onClick={()=>setOperator('+')} >+</button>
        <button onClick={()=>setOperator('-')} >-</button>
        <button onClick={()=>setOperator('*')} >*</button>
        <button onClick={()=>setOperator('/')} >/</button>
        <button onClick={()=>setOperator('sin')} >sin</button>
        <button onClick={()=>setOperator('cos')} >cos</button>
        <button onClick={()=>setOperator('tan')} >tan</button>
        <button onClick={()=>setOperator('sqrt')} >sqrt</button>
        <button onClick={()=>setOperator('log')} >log</button>
        <button onClick={calculation}>=</button>
        <br/>
        <button onClick={handleClear}>Clear</button>
        <br/>
        <p>{result}</p>
        </div>

    )
}
export default ScientificCalc;