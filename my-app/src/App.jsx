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
          <Route path="/" element={<All/>}>
            <Route index element={<Home/>} />
            <Route path="signature" element={< SignatureBox/>} />
            <Route path="compressImage" element={< ImageCompressor/>} />
            <Route path="compressPdf" element={<PdfCompressor/>} /> 
          </Route>
        </Routes>
      </BrowserRouter>
  
    
    </>
  

  )
}

export default App
