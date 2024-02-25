import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function All() {
  return (
    <div className='min-h-[470px] w-full h-auto text-white text-center justify-center'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}