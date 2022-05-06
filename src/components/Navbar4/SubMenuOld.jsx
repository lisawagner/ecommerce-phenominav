import React, { useState } from 'react'

import {
  MdAdd,
  MdRemove,
  } from 'react-icons/md'

import { SidebarLink, SidebarLabel, DropdownLink } from './subMenuStyles'

const SubMenuOld = ({ item }) => {
  const [isSubNavOpen, setIsSubNavOpen] = useState(false)
  const handleSubNav = () => setIsSubNavOpen(!isSubNavOpen)


  return (
    <>
    
    {/* SubMenu */}
    <SidebarLink
      to={item.url}
      onClick={item.submenu && handleSubNav}
      >
        <div>
          {/* {item.icon} */}
          <SidebarLabel>{item.name}</SidebarLabel>
        </div>
        <div>
          {item.submenu && isSubNavOpen ? <MdRemove /> : item.submenu
            ? <MdAdd /> : null}
        </div>
      </SidebarLink>

      {isSubNavOpen &&
        item.submenu.map((item, index) => {
          return (
            <DropdownLink to={item.url} key={index} >
              <SidebarLabel>{item.name}</SidebarLabel>
            </DropdownLink>
          )
        })}

    </>
  )
}

export default SubMenuOld