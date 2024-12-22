import { useEffect, useState } from 'react'
import './App.css'
import {toast} from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{toast.error("hi")},[])
  return (
    <>
     <h1 className='text-5xl'>Hijinsojn</h1>
    </>
  )
}

export default App
