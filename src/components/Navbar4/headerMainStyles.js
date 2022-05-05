import styled from 'styled-components';
import { Link } from 'react-router-dom'

import { DEVICE } from '../../constants/Breakpoints';

// header-main (if it needs to be separate from container, or delete this)
export const HeaderMainWrapper = styled.div`
  width: 100%;
  background: pink;


  @media ${DEVICE.tablet} {
    margin-top: 1rem;
  }
`

// container for branding and searchbar
export const MainContainer = styled.div`
  margin-top: 3.5rem;
  padding: 20px 15px;
  border-bottom: 1px solid var(--smokey-haze);

  @media ${DEVICE.tablet} {
    /* background: green; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 90%;
    margin: auto;
    gap: 80px;
  }
`

// header-logo
export const BrandLink = styled(Link)`
  display: block;
  text-align: center;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--teal);
  text-transform: lowercase;
  font-size: 2.5rem;
  letter-spacing: 2px;

  @media ${DEVICE.tablet} {
    /* background-color: orange; */
    font-size: 3rem;  
  }
`

// header-search-container
export const SearchBar = styled.div`
  position: relative;
  min-width: 300px;

  @media ${DEVICE.tablet} {
    flex-grow: 1;
  }
`

// search-field
export const SearchInput = styled.input.attrs({
  type: 'search',
  placeholder: 'Find your happy...'
})`
  color: var(--onyx);
  padding: 10px 15px;
  padding-right: 50px;
  border: 1px solid var(--cultured);
  border-radius: var(--border-radius-md);
`

export const SearchBtn = styled.button`
  position: absolute;
  top: 60%;
  right: 0;
  transform: translateY(-50%);
  color: var(--onyx);
  font-size: 1.5rem;
  padding-right: 10px;

  &:hover {
    color: var(--salmon-pink);
  }
`

export const UserActionsWrap = styled.div`
  display: none;

  @media ${DEVICE.laptop} {
    display: flex;
    align-items: center;
    gap: 15px;
  }
`

export const ActionBtn = styled.button`
  position: relative;
    font-size: 35px;
    color: var(--onyx);
    padding: 5px;
`

export const Count = styled.span`
  position: absolute;
    top: -2px;
    right: -3px;
    background: var(--bittersweet);
    color: var(--white);
    font-size: 12px;
    font-weight: var(--weight-500);
    line-height: 1;
    padding: 2px 4px;
    border-radius: 20px;
`
