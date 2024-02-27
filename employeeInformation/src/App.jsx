import { useState } from 'react'
import './App.css';
import EmpTree from './component/EmpTree';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <h2> Welcome in employee information</h2>
        <EmpTree />
        
    </>
  )
}

export default App
