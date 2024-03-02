import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import '../components/signature.css'
import { useNavigate } from 'react-router-dom'
const SignatureBox = () => {
  const signatureRef = useRef();
  const navigate=useNavigate();
  const handleClear = () => {
    signatureRef.current.clear();
  };

  const handleSave = () => {
  
    const signatureData = signatureRef.current.toDataURL();
    const link = document.createElement('a');
    link.href = signatureData;
    link.download = 'signature.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
        <div className='box mt-5'>
      <SignatureCanvas ref={signatureRef} penColor="black" canvasProps={{ width: 300, height: 500, className: 'sigCanvas',style: { backgroundColor: 'white' } }}  />
      </div>
    
      <button className='btn btn-primary m-2 col-5' onClick={handleClear}>Clear</button>
      <button className='btn btn-primary m-2 col-5' onClick={handleSave}>Save</button>
      <div >
       <button className='btn btn-primary mb-3 ' onClick={()=>navigate("/Signature-App/")}>Back</button>
       </div>
      </div>
       
  
  );
};

export default SignatureBox;
