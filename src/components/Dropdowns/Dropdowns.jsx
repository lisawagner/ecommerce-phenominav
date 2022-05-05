import React from 'react'

import { DivDropdown, SpanDropdownTitle, DivDropdownContent, ItemDropdown  } from './dropdownStyles'

const Dropdowns = () => {
  return (
    <>
      <h1>Dropdowns</h1>
      <DivDropdown>
        <SpanDropdownTitle>Clothing</SpanDropdownTitle>
          <DivDropdownContent>
            <ItemDropdown>Item 1</ItemDropdown>
            <ItemDropdown>Item 2</ItemDropdown>
            <ItemDropdown>Item 3</ItemDropdown>
          </DivDropdownContent>
      </DivDropdown>
      <DivDropdown>
        <SpanDropdownTitle>Accessories</SpanDropdownTitle>
          <DivDropdownContent>
            <ItemDropdown>Item 1</ItemDropdown>
            <ItemDropdown>Item 2</ItemDropdown>
            <ItemDropdown>Item 3</ItemDropdown>
          </DivDropdownContent>
      </DivDropdown>
    </>
  )
}

export default Dropdowns