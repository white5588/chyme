import React from 'react'
import {Outlet} from "react-router-dom"
import Header from '../static/Header'
import Footer from '../static/Footer'
import Detailed from '../../pages/Detailed'
import Product from '../../pages/Product'

const Layout = () => {
  return (
    <div>

      <div className=' flex max-sm:w-[100%] max-sm:h-[50px] max-sm:justify-between'>

        <Header/>
      </div>
      <Outlet/>
      <Detailed/>
      <Product/>
      <Footer/>
    </div>
  )
}

export default Layout
