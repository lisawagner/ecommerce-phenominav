import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { MainWrap, DropDownContainer, DropDownHeader, DropDownListContainer, DropDownList, ListItem } from './dropdownStyle'

const items = ["Tops", "Jackets", "Sweaters"];

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <MainWrap>
      <h1>Custom Select Dropdown</h1>
      <DropDownContainer>
        <DropDownHeader onClick={handleToggle} >Clothing</DropDownHeader>

        { isOpen && (
          <DropDownListContainer>
          <DropDownList>

            {/* {items.map((item) => { <ListItem>{item}</ListItem> })} */}
            {items.map(item => (
              <ListItem key={Math.random()} >{item}</ListItem>
            ) )}

          </DropDownList>
          </DropDownListContainer>
        )}



      </DropDownContainer>
    </MainWrap>
  )
}

export default Dropdown