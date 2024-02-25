import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import '../components/signature.css'
const SignatureBox = () => {
  const signatureRef = useRef();

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
        <div className='box'>
      <SignatureCanvas ref={signatureRef} penColor="black" canvasProps={{ width: 300, height: 500, className: 'sigCanvas',style: { backgroundColor: 'white' } }}  />
      </div>
    
      <button className='btn btn-primary m-2 col-5' onClick={handleClear}>Clear</button>
      <button className='btn btn-primary m-2 col-5' onClick={handleSave}>Save</button>
      </div>
  
  );
};

export default SignatureBox;
