import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MdSearch,
  MdPersonOutline,
  MdOutlineFavoriteBorder,
  MdOutlineShoppingCart,
  MdOutlineMenu,
  MdClose
  } from 'react-icons/md'
import './navbar2.css'

const Navbar2 = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => setToggle(!toggle)

  return (
    <>
    <nav className='fixed'>
      {/* <ul className="menu"> */}
      <ul className={toggle ? "menu active" : "menu"}>
        <li className="logo"><Link to='/'>Phenomina.</Link></li>
        <li className="item"><Link to='/'>essentials</Link></li>
        <li className="item"><Link to='/'>designer</Link></li>
        <li className="item"><Link to='/'>flair</Link></li>
        <li className="item"><Link to='/'>actiwear</Link></li>
        <li className="item"><Link to='/'>accessories</Link></li>
        <li className="item"><Link to='/'>contact</Link></li>
        <li className="item button">
          <Link to='/login'>
            <MdPersonOutline />
            <span className="btn-label" >login</span>
          </Link>
        </li>
        <li className="item button secondary">
          <Link to='/favourites'>
            <MdOutlineFavoriteBorder />
            <span className="btn-label">favourites</span>
          </Link>
        </li>
        <li className="item button tertiary">
          <Link to='/cart'>
            <MdOutlineShoppingCart />
            <span className="btn-label">cart</span>
          </Link>
        </li>
        <li className="menu-toggle" onClick={handleToggle}>
          {!toggle ? (
            <MdOutlineMenu />
          ) : (
            <MdClose />
          )}
          {/* <Link to='/' >
            <MdOutlineMenu />
          </Link> */}
        </li>
      </ul>
    </nav>

    </>
  )
}

export default Navbar2