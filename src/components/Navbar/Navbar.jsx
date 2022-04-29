import React from 'react'
import { Link } from 'react-router-dom'
import {
  MdSearch,
  MdPersonOutline,
  MdOutlineFavoriteBorder,
  MdOutlineShoppingCart,
  MdOutlineMenu
  } from 'react-icons/md'

const Navbar = () => {
  return (
    <>
      <h1>Navbar</h1>
      {/* TOP-NAV */}
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
    
    </>

  )
}

export default Navbar