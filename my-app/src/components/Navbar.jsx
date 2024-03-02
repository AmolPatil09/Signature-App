import React from 'react'
import '../components/Navbar.css'

export default function Navbar() {
 
  return (

    <nav style={{ position: 'fixed', top: 0, left: 0, width: '100%', backgroundColor: 'blue', padding: '10px 20px', zIndex: 1000}}>
     <div className='d-flex'>
     <div className='justify-content-start'>
     <h1>FormFillHelp</h1>
     
     </div>
     </div>
     
   
    
  </nav>
  )
}
