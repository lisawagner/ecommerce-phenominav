import React from 'react'
import { Link } from 'react-router-dom'
import {
  MdSearch,
  MdPersonOutline,
  MdOutlineFavoriteBorder,
  MdOutlineShoppingCart,
  MdOutlineMenu
  } from 'react-icons/md'

import './navbar.css'

const Navbar = () => {
  return (
    <>
    {/* TOP-NAV */}
    <div className="site-navbar">
      <div className="top-nav">
        <div className="container">
          <div className="top-nav-row">
            <div className="search-col">
              <form action="" className='top-search'>
                <span><MdSearch /></span>
                <input type="text" className='search-form-control' placeholder="find your happy" />
              </form>
            </div>
            <div className="brand-col">
              <div className="site-brand">
                <Link to='/' className='brand-logo' >phenomina.</Link>
              </div>
            </div>
            {/* START HERE SATURDAY !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
            <div className="icon-links-col">
              <div className="top-nav-icons">
                <ul>
                  <li>
                    <Link to='/login'>
                      <MdPersonOutline />
                    </Link> 
                  </li>
                  <li>
                    <Link to='/favourites'>
                      <MdOutlineFavoriteBorder />
                    </Link> 
                  </li>
                  <li>
                    <Link to='/cart' className='site-cart'>
                      <MdOutlineShoppingCart />
                    </Link> 
                  </li>
                  <li>
                    <Link to='/' className='toggle-menu'>
                      <MdOutlineMenu />
                    </Link> 
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

    {/* MAIN-NAV */}
    <div className="main-nav">main navigation</div>

    </div> {/* end site-nav */}
    </>

  )
}

export default Navbar