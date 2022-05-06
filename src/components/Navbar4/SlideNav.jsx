import React, { useState } from 'react'

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

import { MobileNavigationMenu, SlideNavTop, SlideNavTitle, CloseNavBtn, MobileMenu, MenuCategory, MenuTitle } from './slideNavStyles'

const SlideNav = ({click, handleClick}) => {
  // const [toggle, setToggle] = useState(false)

  // const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);

  return (
    <>
      <div>SlideNav</div>
      <MobileNavigationMenu clicked={click} >

        <SlideNavTop>
          <SlideNavTitle>Menu</SlideNavTitle>
          <CloseNavBtn onClick={handleClick} >
            <MdClose  name="close-outline" />
          </CloseNavBtn>
        </SlideNavTop>

        <MobileMenu clicked={click} >
          <MenuCategory >
            <MenuTitle>Home</MenuTitle>
          </MenuCategory>
          <MenuCategory>
            <MenuTitle>Collections</MenuTitle>
          </MenuCategory>
        </MobileMenu>


      </MobileNavigationMenu>
    </>
  )
}

export default SlideNav