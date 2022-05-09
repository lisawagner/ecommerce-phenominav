import react from 'react'
import MenuItems from './MenuItems'

import { DropdownListUL } from './desktopDDStyles'

const DesktopDropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;

  return (
    <DropdownListUL className={`${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </DropdownListUL>
  )
}

export default DesktopDropdown