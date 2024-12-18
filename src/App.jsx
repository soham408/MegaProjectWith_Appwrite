import { useState } from 'react'
import './App.css'
import { log } from 'console'
import { console } from 'console';


function App() {
  const [count, setCount] = useState(0)
  
  console.log(import.meta.env.VITE_APPWRITE_URL);
  
  return (
    
    <>
      <h1>MegaProjectWith_Appwrite</h1>
    </>
  )
}

export default App
