import React, { useState } from 'react'

// import {
//   MdAdd,
//   MdRemove,
//   } from 'react-icons/md'

// import { SidebarLink, SidebarLabel, DropdownLink } from './subMenuStyles'



const SubMenu = ({ item }) => {
  const [isSubMenuShow, setIsSubMenuShow] = useState(false);

  return (
    <>
    <div>
      <div onClick={() => setIsSubMenuShow(!isSubMenuShow)}>
        {item.name}
      </div>
      {item.submenu && isSubMenuShow && <SubNav dropDownItem={item.submenu} />}
    </div>

    </>
  )
}

const SubNav = ({ dropDownItem }) => {
  return (
    <div className="drop-down">
      <ul>
        {dropDownItem.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default SubMenu