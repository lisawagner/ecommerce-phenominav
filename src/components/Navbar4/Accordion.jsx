import React, { useState } from 'react'
import { NAVLINKS } from '../../models/navlinks'

import {
  MdAdd,
  MdRemove,
  } from 'react-icons/md'
import { IconContext } from "react-icons";
import { Wrapper, Title, Arrow, Details } from './accordionStyles'

const Accordion = ({ title, description }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
    <Wrapper>
			<Title onClick={() => setIsVisible(!isVisible)}>
				<h4>{title}</h4>
				<Arrow as={MdAdd} active={isVisible} alt="Arrow" />
			</Title>
			<Details active={isVisible}>
				<p>{description}</p>
			</Details>
		</Wrapper>



    </>
  )
}

export default Accordion