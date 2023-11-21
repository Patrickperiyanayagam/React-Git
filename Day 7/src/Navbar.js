import {Link} from 'react-router-dom';
import React from 'react'

export default function Navbar() {
  return (
    <>
      <nav>
        <Link to='/home' >Home</Link>
        <Link to='/about' >About</Link>
      </nav>
    </>
    
  )
}
