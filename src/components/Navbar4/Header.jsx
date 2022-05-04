import React from 'react'
import { Link } from 'react-router-dom'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <>
      <h1>Phenomina</h1>
      <DesktopNav />
      <MobileNav />
    </>
  )
}

export default Header