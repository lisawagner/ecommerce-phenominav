import React from 'react'
import { NAVLINKS } from '../../models/navlinks'
import MenuItems from './MenuItems'

import { DesktopNavigation, DesktopNavWrap, DesktopMenuList, MenuItem, MenuLink, DropdownList, DropdownItem, TempLink } from './desktopNavStyle'


const DesktopNav = () => {
  return (
    <>
      <DesktopNavigation>

        <DesktopNavWrap>
          <DesktopMenuList>
            {NAVLINKS.map( (item, index) => {
              const depthLevel = 0;
              return <MenuItems items={item} key={index} depthLevel={depthLevel} />
            } )}
          </DesktopMenuList>
        </DesktopNavWrap>


        {/* <DesktopNavWrap>
          <DesktopMenuList>
            
            <MenuItem>
              <MenuLink>Collections</MenuLink>
              <DropdownList>
                <DropdownItem>
                  <TempLink>Essentials 2022</TempLink>
                </DropdownItem>
                <DropdownItem>
                  <TempLink>Couture Cafe</TempLink>
                </DropdownItem>
                <DropdownItem>
                  <TempLink>Reflextions</TempLink>
                </DropdownItem>
                <DropdownItem>
                  <TempLink>Apocalytica</TempLink>
                </DropdownItem>
              </DropdownList>
            </MenuItem>

            <MenuItem>
              <MenuLink>Clothing</MenuLink>
              <DropdownList>
                <DropdownItem>
                  <TempLink>Tops</TempLink>
                </DropdownItem>
                <DropdownItem>
                  <TempLink>Jackets</TempLink>
                </DropdownItem>
                <DropdownItem>
                  <TempLink>Sweaters</TempLink>
                </DropdownItem>
                <DropdownItem>
                  <TempLink>Bottoms</TempLink>
                </DropdownItem>
              </DropdownList>
            </MenuItem>

            <MenuItem>
              <MenuLink>Accessories</MenuLink>
              <DropdownList>
                <DropdownItem>
                  <TempLink>Bags</TempLink>
                </DropdownItem>
                <DropdownItem>
                  <TempLink>Belts</TempLink>
                </DropdownItem>
                <DropdownItem>
                  <TempLink>Jewelry</TempLink>
                </DropdownItem>
                <DropdownItem>
                  <TempLink>Sunglasses</TempLink>
                </DropdownItem>
                <DropdownItem>
                  <TempLink>Scarves</TempLink>
                </DropdownItem>
                <DropdownItem>
                  <TempLink>Shoes</TempLink>
                </DropdownItem>
              </DropdownList>
            </MenuItem>

            <MenuItem>
              <MenuLink>Phenomina</MenuLink>
              <DropdownList>
                <DropdownItem>
                  <TempLink>Storybook</TempLink>
                </DropdownItem>
                <DropdownItem>
                  <TempLink>Circle of Life</TempLink>
                </DropdownItem>
                <DropdownItem>
                  <TempLink>Manifesto</TempLink>
                </DropdownItem>
              </DropdownList>
            </MenuItem>

          </DesktopMenuList>
        </DesktopNavWrap> */}

      </DesktopNavigation>
    </>

  )
}

export default DesktopNav