import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { DEVICE } from '../../constants/Breakpoints';

// header-main (if it needs to be separate from container, or delete this)
export const Wrapper = styled.div`
  width: 100%;
  /* background: pink; */
`

// container for branding and searchbar
export const MainContainer = styled.div`
  margin-top: 3.5rem;
  padding: 20px 0;
  border-bottom: 1px solid var(--smokey-haze);
`

// header-logo container / link
export const BrandLink = styled(Link)`
  display: block;
  text-align: center;
  font-weight: 700;
  color: teal;
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

`

