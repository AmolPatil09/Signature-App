import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { useNavigate } from 'react-router-dom'
const PdfCompressor = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [pdfUrl, setPdfUrl] = useState('');
  const [compressedPdf, setCompressedPdf] = useState(null);
  const navigate=useNavigate();
  const handlePdfChange = (event) => {
    const file = event.target.files[0];
    setSelectedPdf(file);

    
    if (file) {
      const url = URL.createObjectURL(file);
      setPdfUrl(url);
     
    }
  };

  const compressPdf = async () => {
    if (!selectedPdf) {
      alert('Please select a PDF file');
      return;
    }

    try {
      const reader = new FileReader();
      reader.onload = async () => {
        const buffer = reader.result;
        const pdfDoc = await PDFDocument.load(buffer);
        
       
        const compressedPdfBytes = await pdfDoc.save();
        const compressedPdfBlob = new Blob([compressedPdfBytes], { type: 'application/pdf' });

        setCompressedPdf(compressedPdfBlob);
      };
      reader.readAsArrayBuffer(selectedPdf);
    } catch (error) {
      console.error('PDF compression error:', error);
      alert('Failed to compress PDF');
    }
  };

  const downloadPdf = () => {
    if (compressedPdf) {
      const url = URL.createObjectURL(compressedPdf);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'compressed_pdf.pdf');
      document.body.appendChild(link);
      link.click();
    }
  };

  return (
    <div>
        <div style={{ width: '315px', height: '300px', border:'2px solid black',display:'flex',alignItems:'center',justifyContent:'center'  }}>
        {console.log(pdfUrl)}
        </div>
      <input type="file" accept=".pdf" onChange={handlePdfChange}  className='form-control my-2'/>
      <br />
      <button onClick={compressPdf} className='btn btn-primary my-2'>Compress PDF</button>
      <br />
      <button onClick={downloadPdf} disabled={!compressedPdf} className='btn btn-primary my-2' >
        Download Compressed PDF
      </button>
      <div>
       <button className='btn btn-primary mb-3 ' onClick={()=>navigate("/Signature-App/")}>Back</button>
       </div>
    </div>
  );
};

export default PdfCompressor;
