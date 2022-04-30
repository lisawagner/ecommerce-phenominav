import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MdSearch,
  MdPersonOutline,
  MdOutlineFavoriteBorder,
  MdOutlineShoppingCart,
  MdOutlineMenu
  } from 'react-icons/md'
import './navbar2.css'

const Navbar2 = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => setToggle(!toggle)

  return (
    <>
    <nav>
      {/* <ul className="menu"> */}
      <ul className={toggle ? "menu active" : "menu"}>
        <li className="logo"><Link to='/'>Phenomina.</Link></li>
        <li className="item"><Link to='/'>essentials</Link></li>
        <li className="item"><Link to='/'>designer</Link></li>
        <li className="item"><Link to='/'>flair</Link></li>
        <li className="item"><Link to='/'>actiwear</Link></li>
        <li className="item"><Link to='/'>accessories</Link></li>
        <li className="item"><Link to='/'>contact</Link></li>
        <li className="item button"><Link to='/login'>login</Link></li>
        <li className="item button secondary"><Link to='/favourites'>favourites</Link></li>
        <li className="item button tertiary"><Link to='/cart'>cart</Link></li>
        <li className="menu-toggle" onClick={handleToggle}>
          <Link to='/' >
            <MdOutlineMenu />
          </Link>
        </li>
      </ul>
    </nav>

    </>
  )
}

export default Navbar2