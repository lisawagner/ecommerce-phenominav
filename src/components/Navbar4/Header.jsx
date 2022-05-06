import React, { useState } from 'react'
import {
  MdSearch,
  // MdOutlineHome,
  MdPersonOutline,
  MdOutlineFavoriteBorder,
  // MdOutlineKeyboardArrowDown,
  // MdOutlineKeyboardArrowUp,
  MdOutlineShoppingCart,
  // MdOutlineMenu,
  // MdClose,
  } from 'react-icons/md'

import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import HeaderMain from './HeaderMain'
import HeaderTop from './HeaderTop'

const Header = () => {

  return (
    <>
      <HeaderTop />
      <HeaderMain />
      <DesktopNav />
      <MobileNav />
    </>
  )
}

export default Header