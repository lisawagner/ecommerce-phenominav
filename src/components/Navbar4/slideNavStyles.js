import styled from 'styled-components';
import { Link } from 'react-router-dom'

import { DEVICE } from '../../constants/Breakpoints';


// top area //

export const MobileNavigationMenu = styled.nav`
  /* background: var(--white);
  position: fixed;
  top: 0; */

  /* left: -100%; */
  /* width: 100%; */
  /* max-width: 320px; */
  
  height: 100vh;
  padding: 20px;
  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.1);
  overflow-y: scroll;
  overscroll-behavior: contain;
  /* visibility: hidden; */
  transition: 0.5s ease;
  z-index: 20;
`

export const SlideNavTop = styled.div``

export const SlideNavTitle = styled.h2``

export const CloseNavBtn = styled.button``

// menu area //
//mobile-menu-category-list
export const MobileMenu = styled.ul``

// menu-category
export const MenuCategory = styled.li``

// menu-title
export const MenuTitle = styled.p``


// social icons //
