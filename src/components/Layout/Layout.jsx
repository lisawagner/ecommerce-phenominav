import React from 'react'
// import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Navbar2 from '../Navbar2/Navbar2'

const Layout = ({children}) => {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar2 />
      {children}
      <Footer />
    </>
  )
}

export default Layout