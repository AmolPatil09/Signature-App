import React from 'react'
import '../components/Navbar.css'
export default function Navbar() {
  return (

    <nav style={{ position: 'fixed', top: 0, left: 0, width: '100%', backgroundColor: 'blue', padding: '10px 20px', zIndex: 1000 }}>
     <div className='d-flex justify-content-start'>
     <h1>Siganature</h1>
     </div>
   
    
  </nav>
  )
}
