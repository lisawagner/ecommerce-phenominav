import React from 'react'
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
import { HeaderMainWrapper, BrandLink, MainContainer, SearchBar, SearchInput, SearchBtn, UserActionsWrap, ActionBtn, Count } from './headerStyle'

const Header = () => {
  return (
    <>

<HeaderMain />
      <HeaderMainWrapper>
        <MainContainer>

          <BrandLink to="/">Phenomina</BrandLink>

          <SearchBar>
            <SearchInput />
            <SearchBtn>
              <MdSearch />
            </SearchBtn>
          </SearchBar>

          <UserActionsWrap>
            <ActionBtn>
              <MdPersonOutline />
            </ActionBtn>
            <ActionBtn>
              <MdOutlineFavoriteBorder />
              <Count>0</Count>
            </ActionBtn>
            <ActionBtn>
              <MdOutlineShoppingCart />
              <Count>0</Count>
            </ActionBtn>
          </UserActionsWrap>

        </MainContainer>
      </HeaderMainWrapper>
      
      
      <DesktopNav />
      <MobileNav />
    </>
  )
}

export default Header