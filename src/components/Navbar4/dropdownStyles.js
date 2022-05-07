import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const SidebarLink = styled(Link)`
  display: flex;
  color: var(--onyx);
  /* color: #e1e9fc; */
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  list-style: none;
  /* height: 60px; */
  text-decoration: none;
  font-size: 1.1rem;

  &:hover{
    /* background: #252831; */
    color: pink;
    
    /* border-left: 4px solid #632ce4; */
    cursor: pointer;
  }
`

export const DropdownLink = styled(Link)`
  /* background: #414757; */
  /* height: 60px; */
  color: var(--onyx);
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  /* color: #f5f5f5; */
  /* font-size: 18px; */

  &:hover {
    color: pink;
    /* background: #632ce4; */
    /* cursor: pointer; */
  }
`

export const SidebarLabel = styled.span`
  margin-left: 10px;
`