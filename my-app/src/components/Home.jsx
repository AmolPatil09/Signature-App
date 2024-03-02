import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function 
() {
    const navigate=useNavigate();
  return (
    
    <div className='d-flex flex-column'>
        <button className='btn btn-primary mb-3' onClick={()=>navigate("/Signature-App/signature")}>Dounload Signature</button>
        <button className='btn btn-primary mb-3' onClick={()=>navigate("/Signature-App/compressImage")}>Compress Image</button>
        <button className='btn btn-primary mb-3' onClick={()=>navigate("/Signature-App/compressPdf")}>Compress Pdf</button>
         
    </div>
  )
}
