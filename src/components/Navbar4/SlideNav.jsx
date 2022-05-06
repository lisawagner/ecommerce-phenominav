import React, { useState } from 'react'
import { Link } from "react-router-dom";
// import Accordion from './Accordion'
import SubMenu from './SubMenu'
import { NAVLINKS } from '../../models/navlinks'

import {
  // MdSearch,
  // MdOutlineHome,
  // MdPersonOutline,
  // MdOutlineFavoriteBorder,
  // MdOutlineKeyboardArrowDown,
  // MdOutlineKeyboardArrowUp,
  // MdOutlineShoppingCart,
  // MdOutlineMenu,
  // MdGridView,
  MdClose,
  } from 'react-icons/md'

import { MobileNavigationMenu, SlideNavTop, SlideNavTitle, CloseNavBtn, MobileMenu, MenuCategory, MenuTitle } from './slideNavStyles'

const SlideNav = ({click, handleClick}) => {

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

        {/* <SubMenu /> */}

        {NAVLINKS.map((item, index) => {
          return <SubMenu item={item} key={index} />
        })}

        {/* {NAVLINKS.map(({name, url}, index) => {
          return (
              <Accordion key={index} title={name} description={url} />
          )
        })} */}

        <MobileMenu clicked={click} >
          <MenuCategory >
            <MenuTitle href="/" >Home</MenuTitle>
          </MenuCategory>

          <MenuCategory>
            <MenuTitle href="/cart" >Collections</MenuTitle>
          </MenuCategory>

          <MenuCategory>
            <MenuTitle href="/" >Clothing</MenuTitle>
          </MenuCategory>
          <MenuCategory>
            <MenuTitle href="/" >Accessories</MenuTitle>
          </MenuCategory>
          <MenuCategory>
            <MenuTitle href="/" >Phenomina</MenuTitle>
          </MenuCategory>
          <MenuCategory>
            <MenuTitle href="/" >Contact</MenuTitle>
          </MenuCategory>
        </MobileMenu>

      

      </MobileNavigationMenu>
    </>
  )
}

export default SlideNav