import { useEffect, useState } from 'react'
import './App.css'
import {toast} from 'react-hot-toast'
import Footer from './Components/Footer/footer.jsx'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Signup from './Pages/signup.jsx'

function App() {

  useEffect(()=>{toast.error("hi")},[])
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      
      <Route path='/about' element={<About/>}/>
      
      <Route path='/signup' element={<Signup/>}/>
     </Routes>
    </>
  )
}

export default App
