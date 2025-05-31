import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    
   alert('This is demo of UseEffect')   
    
  },[])
  return (
    <div>
      Hello World
    </div>
  );
}

export default App;
