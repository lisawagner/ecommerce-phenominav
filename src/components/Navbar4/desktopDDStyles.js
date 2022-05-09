import styled from 'styled-components';
import { Link } from 'react-router-dom'

import { DEVICE } from '../../constants/Breakpoints';


export const DropdownListUL = styled.ul.attrs(
  props => ({ className: props.className, })
)`
  position: absolute;
  width: 200px;
  background: var(--white);
  padding: 20px 0;
  border-radius: var(--border-radius-md);
  border: 1px solid var(--cultured);
  box-shadow: 0 3px 5px hsla(0, 0%, 0%, 0.1);
  transition: var(--transition-timing);
  /* display: none; */
  transform: translateY(60px);
  visibility: hidden;
  opacity: 0;

  &.show {
    /* display: block; */
    transform: translateY(0);
    visibility: visible;
    opacity: 1;
  }

`