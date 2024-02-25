import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignatureBox from './components/signatureBox'
import './App.css'
import All from './components/All';
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Outlet } from 'react-router-dom';

function App() {
 

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<All/>}>
            <Route index element={<Home/>} />
            <Route path="signature" element={< SignatureBox/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  
    
    </>
  

  )
}

export default App
