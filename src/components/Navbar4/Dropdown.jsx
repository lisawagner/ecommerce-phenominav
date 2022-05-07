import React, { useState } from 'react'

import { SidebarLink, DropdownLink, SidebarLabel } from './dropdownStyles'

const Dropdown = ( { item } ) => {
  const [subnav, setSubnav] = useState(false)
  const showSubnav = () => setSubnav(!subnav)

  return (
    <>
    {/* <p>Dropdown</p> */}
    <SidebarLink to={item.url} onClick={item.submenu && showSubnav}>
        <div>
          {/* {item.icon} */}
          <SidebarLabel>{item.name}</SidebarLabel>
        </div>
        <div>
          {item.submenu && subnav ? item.iconClose : item.submenu ? item.iconOpen : null}
        </div>
      </SidebarLink>
        {subnav && item.submenu.map((item, index) => {
          return(
            <DropdownLink to={item.url} key={index} >
              {/* {item.icon} */}
              <SidebarLabel>{item.name}</SidebarLabel>
            </DropdownLink>
          )
        })}
    </>
  )
}

export default Dropdown