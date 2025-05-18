import React from 'react'
import Navbar from '../assets/components/Navbar'
import Footer from '../assets/components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayout
