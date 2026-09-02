import React from 'react'
import Navbar from './Components/Commonpage/Navbar/Navbar'
import Homepage from './Components/Pages/Homepage'
import Footer from './Components/Commonpage/Footer/footer'
import Aboutpage from './Components/Pages/Aboutpage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contactpage from './Components/Pages/Contactpage'
import Teampage from './Components/Pages/Teampage'
import Projectpage from './Components/Pages/Projectpage'
import Servicepage from './Components/Pages/Servicepage'


function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<Aboutpage/>}/>
          <Route path="/team" element={<Teampage/>}/>
          <Route path="/contact" element={<Contactpage/>}/>
          <Route path="/projects" element={<Projectpage/>}/>
          <Route path="/services" element={<Servicepage/>}/>

        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
