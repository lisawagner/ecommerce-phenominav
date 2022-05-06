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

const SlideNav = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => setToggle(!toggle)

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div>SlideNav</div>
      <MobileNavigationMenu>

        <SlideNavTop>
          <SlideNavTitle>Menu</SlideNavTitle>
          {/* <CloseNavBtn onClick={handleToggle} >
            <MdClose name="close-outline" />
          </CloseNavBtn> */}
          <CloseNavBtn onClick={ () => setIsOpen(!isOpen) } >
            <MdClose name="close-outline" />
          </CloseNavBtn>
        </SlideNavTop>

        <MobileMenu>
          <MenuCategory>
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