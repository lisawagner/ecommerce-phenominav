import styled from 'styled-components';
import { Link } from 'react-router-dom'

import { DEVICE } from '../../constants/Breakpoints';

// desktop-navigation-menu
export const DesktopNavigation = styled.nav`
  display: none;

  @media ${DEVICE.laptop} {
    display: block;
  }
`

// container
export const DesktopNavWrap = styled.div`
  /* padding: 0 15px; */
  /* margin: auto */
`

//desktop-menu-category-list
export const DesktopMenuList = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`

//menu-category
export const MenuItem = styled.li`
  
`

//menu-title |||||switch to react-router-dom Links
export const MenuLink = styled.a`
  position: relative;
    color: var(--onyx);
    font-size: var(--fs-7);
    font-weight: var(--weight-600);
    text-transform: uppercase;
    padding: 15px 0;
    transition: var(--transition-timing);

    &:hover {
      color: var(--salmon-pink);
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--salmon-pink);
      transform: scaleX(0);
      transform-origin: left;
      transition: var(--transition-timing);
    }

    &:hover::after {
      transform: scaleX(1);
    }
`

// dropdown-list
export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 200px;
  background: var(--white);
  padding: 20px 0;
  border-radius: var(--border-radius-md);
  border: 1px solid var(--cultured);
  box-shadow: 0 3px 5px hsla(0, 0%, 0%, 0.1);

  /* ||||||||||||||||||  HERE ||||||||||||||||||||||||| */
  transform: translateY(50px);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;


  transition: var(--transition-timing);
  z-index: 5;
`

//dropdown-item
export const DropdownItem = styled.li``

//no className here, need to switch to rrd Link
export const TempLink = styled.a`
  color: var(--sonic-silver);
  /* font-size: var(--fs-7); */
  text-transform: capitalize;
  padding: 4px 20px;
  /* transition: var(--transition-timing); */

  &:hover {
    color: var(--salmon-pink);
  }
`
