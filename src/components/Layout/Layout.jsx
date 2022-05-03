import React from 'react'
// import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Navbar3 from '../Navbar3/Navbar3'
import Navbar4 from '../Navbar4/Navbar4'
// import Navbar2 from '../Navbar2/Navbar2'

const Layout = ({children}) => {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Navbar2 /> */}
      <Navbar3 />
      <Navbar4 />
      {children}
      <Footer />
    </>
  )
}

export default Layout