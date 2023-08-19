import React from 'react'
import { Outlet } from 'react-router-dom'

//Componet
 import Header from '../components/header/Header'
 import Footer from '../components/footer/Footer'


const RootLayout = () => {
  return (
    <>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default RootLayout