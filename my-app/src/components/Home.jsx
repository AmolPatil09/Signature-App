import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function 
() {
    const navigate=useNavigate();
  return (
    <div>
        <button className='btn btn-primary' onClick={()=>navigate("/signature")}>Dounload Signature</button>
    </div>
  )
}
