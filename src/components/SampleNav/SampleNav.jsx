import React from 'react'
import { Link } from 'react-router-dom'
import { SampleWrap, NavbarDropdown, NavbarDropdownContent } from './sampleNavStyle'

const SampleNav = () => {
  return (
    <>
      <SampleWrap>
        <h1>SampleNav</h1>
        <NavbarDropdown>
          <span>Menu</span>
          <NavbarDropdownContent>
            <Link to="/">Dropdown here</Link>
          </NavbarDropdownContent>
        </NavbarDropdown>
      </SampleWrap>
    </>
  )
}

export default SampleNav