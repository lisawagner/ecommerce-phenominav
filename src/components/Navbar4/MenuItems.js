import { useState, useEffect, useRef } from 'react'
import DesktopDropdown from './DesktopDropdown'

import './menuitems.css'
import { MenuItem, MenuLink, DropdownList, DropdownItem, TempLink } from './desktopNavStyle'

const MenuItems = ({ items, depthLevel }) => {
const [dropdown, setDropdown] = useState(false)

let ref = useRef()

useEffect(() => {
  const handler = (e) => {
    if (dropdown && ref.current && !ref.current.contains(e.target)) {
      setDropdown(false);
    }
  };
  document.addEventListener("mousedown", handler);
  document.addEventListener("touchstart", handler);
  return () => {
    // Cleanup the event listener
    document.removeEventListener("mousedown", handler);
    document.removeEventListener("touchstart", handler);
  };
}, [dropdown]);

const onMouseEnter = () => {
  window.innerWidth > 560 && setDropdown(true);
};

const onMouseLeave = () => {
  window.innerWidth > 560 && setDropdown(false);
};

  return (
    // <div>MenuItems</div>
    <MenuItem  
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        <>
          <MenuLink
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            <a href="/#">{items.name}</a>
            {/* {items.name} */}
            {/* {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />} */}
          </MenuLink>
        
          <DesktopDropdown
          depthLevel={depthLevel}
          submenus={items.submenu}
          dropdown={dropdown}
          />
          
        </>
      ) : (
        <div><a href="/#">{items.name}</a></div>
        
      )}
    </MenuItem>
  )
}

export default MenuItems