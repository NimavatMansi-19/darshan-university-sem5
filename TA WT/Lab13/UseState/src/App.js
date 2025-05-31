import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [num,setNum] = useState(0)
  function ChangeNum(){
    setNum(num+1);
  }
  
  return (
    <div>
    <button onClick={ChangeNum}>Click</button>
    <p>{num}</p>
    </div>
  );
}

export default App;
