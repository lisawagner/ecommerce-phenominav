import styled from 'styled-components';
import { Link } from 'react-router-dom'

import { DEVICE } from '../../constants/Breakpoints';

export const DivDropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 24.7rem;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DivDropdown = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${DivDropdownContent} {
    display: block;
  }
`;

export const SpanDropdownTitle = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  padding: 2rem 6rem;
  border-radius: 0.6rem;
  border: 1px solid black;

  &:hover {
    cursor: pointer;
  }
`;

export const ItemDropdown = styled.p`
  padding: 1rem;

  &:hover {
    cursor: pointer;
    background: lightgray;
  }
`;