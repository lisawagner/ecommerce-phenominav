import React from 'react'
// import { Link } from 'react-router-dom'
// import styled from 'styled-components'

import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import { Wrapper, BrandLink, MainContainer, SearchBar } from './headerStyle'

const Header = () => {
  return (
    <>
      <Wrapper>
        <MainContainer>
          <BrandLink to="/">Phenomina</BrandLink>
          <SearchBar>
            
          </SearchBar>
        </MainContainer>
      </Wrapper>
      
      <DesktopNav />
      <MobileNav />
    </>
  )
}

export default Header