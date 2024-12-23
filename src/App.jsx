import { useEffect, useState } from 'react'
import './App.css'
import {toast} from 'react-hot-toast'
import Footer from './Components/Footer/footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{toast.error("hi")},[])
  return (
    <>
     <Footer/>
    </>
  )
}

export default App
