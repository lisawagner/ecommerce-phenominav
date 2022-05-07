import React, { useState } from 'react'
import SlideNav from './SlideNav'

import {
  // MdSearch,
  MdOutlineHome,
  // MdPersonOutline,
  MdOutlineFavoriteBorder,
  // MdOutlineKeyboardArrowDown,
  // MdOutlineKeyboardArrowUp,
  MdOutlineShoppingCart,
  MdOutlineMenu,
  // MdGridView,
  // MdClose,
  } from 'react-icons/md'

import { MobileNavWrap, ActionBtn, UserActions, CountStyle } from './mobileNavStyles'


const MobileNav = ( ) => {
  // const [toggle, setToggle] = useState(false)
  // const handleToggle = () => setToggle(!toggle)

  // slidenav 
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
    <h1>MobileNav</h1>
    <MobileNavWrap clicked={click}>

      {/* <ActionBtn onClick={handleToggle}  >
        {!toggle ? (<MdOutlineMenu name="menu-outline" />) : (<MdClose name="menu-close" />)}
      </ActionBtn> */}

      <ActionBtn onClick={handleClick}  >
        <MdOutlineMenu name="menu-outline" />
      </ActionBtn>

      {/* <ActionBtn onClick={handleToggle} >
        {!isOpen ? (<MdOutlineMenu name="menu-outline" />) : (<MdClose name="menu-close" />)}
      </ActionBtn> */}


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
    <SlideNav click={click} handleClick={handleClick} />

    </>
  )
}

export default MobileNav