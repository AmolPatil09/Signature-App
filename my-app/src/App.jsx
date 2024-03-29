import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignatureBox from './components/signatureBox'
import './App.css'
import All from './components/All';
import Home from './components/Home'
import ImageCompressor from './components/ImageCompressor';
import PdfCompressor from './components/PdfCompress';

function App() {
 

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/Signature-App/" element={<All/>}>
            <Route index element={<Home/>} />
            <Route path="signature" element={< SignatureBox/>} />
            <Route path="compressImage" element={< ImageCompressor/>} />
            <Route path="compressPdf" element={<PdfCompressor/>} /> 
            <Route path="*" element={<Home/>}  /> 
          </Route>
        </Routes>
      </BrowserRouter>
  
    
    </>
  

  )
}

export default App
