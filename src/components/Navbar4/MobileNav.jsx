import React, { useState } from 'react'
import SlideNav from './SlideNav'

import {
  MdSearch,
  MdOutlineHome,
  MdPersonOutline,
  MdOutlineFavoriteBorder,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdOutlineShoppingCart,
  MdOutlineMenu,
  MdGridView,
  MdClose,
  } from 'react-icons/md'

import { MobileNavWrap, ActionBtn, UserActions, CountStyle } from './mobileNavStyles'


const MobileNav = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => setToggle(!toggle)

  return (
    <>
    <h1>MobileNav</h1>
    <MobileNavWrap>

      <ActionBtn onClick={handleToggle} >
        {!toggle ? (<MdOutlineMenu name="menu-outline" />) : (<MdClose name="menu-close" />)}
      </ActionBtn>

      <UserActions>
        <ActionBtn><MdOutlineHome name="home-outline" /></ActionBtn>
        <ActionBtn>
          <MdOutlineFavoriteBorder name="heart-outline" />
          <CountStyle>0</CountStyle>
        </ActionBtn>
        <ActionBtn>
          <MdOutlineShoppingCart name="bag-handle-outline" />
          <CountStyle>0</CountStyle>
        </ActionBtn>

      </UserActions>
    </MobileNavWrap>
    <SlideNav />

    </>
  )
}

export default MobileNav