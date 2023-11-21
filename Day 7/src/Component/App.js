import {Routes,Route} from 'react-router-dom'
import Navbar from '../Navbar';
import About from './About';
import Home from '../Home';
import React from 'react'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}
