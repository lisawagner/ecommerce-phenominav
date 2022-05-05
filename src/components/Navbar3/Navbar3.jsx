import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MdSearch,
  MdOutlineHome,
  MdPersonOutline,
  MdOutlineFavoriteBorder,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdOutlineShoppingCart,
  MdOutlineMenu,
  MdGridView,
  MdClose,
  } from 'react-icons/md'

import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa'

import './navbar3.css'

const Navbar3 = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => setToggle(!toggle)

  const [mens, setMens] = useState(false)
  const handleMensToggle = () => setMens(!mens)

  const [womens, setWomens] = useState(false)
  const handleWomensToggle = () => setWomens(!womens)
  
  const [language, setLanguage] = useState(false)
  const handleLanguageToggle = () => setLanguage(!language)

  const [currency, setCurrency] = useState(false)
  const handleCurrencyToggle = () => setCurrency(!currency)

  return (
    <>
      {/* <!--- HEADER --> */}

<header>
  {/* header top */}
  <div className="header-top">
    <div className="container">
      <ul className="header-social-container">
        <li>
          <a href="/" className="social-link">
            <FaFacebookSquare name="logo-facebook" />
          </a>
        </li>
        <li>
          <a href="/" className="social-link">
            <FaTwitter name="logo-twitter" />
          </a>
        </li>
        <li>
          <a href="/" className="social-link">
            <FaInstagram name="logo-instagram" />
          </a>
        </li>
        <li>
          <a href="/" className="social-link">
            <FaTiktok name="logo-tiktok" />
          </a>
        </li>
      </ul>
      <div className="header-alert-news">
        <p><b>Free Shipping</b>This Week Order Over - $55</p>
      </div>

      <div className="header-top-actions">
        <select name="currency">
          <option value="usd">USD $</option>
          <option value="eur">EUR &euro;</option>
        </select>
        <select name="language">
          <option value="en-US">English</option>
          <option value="es-ES">Espa&ntilde;ol</option>
          <option value="fr">Fran&ccedil;ais</option>
        </select>
      </div>
      
    </div>
  </div>



  {/* header main */}
  <div className="header-main">

    <div className="container">
      <a href="/" className="header-logo">
        <div className="flex-title">Phenomina</div>
        {/* <img src="" alt="Phenomina." width="120" height="36"/> */}
      </a>
      <div className="header-search-container">
        <input type="search" name="search" className="search-field" placeholder="Enter your product name..."/>
        <button className="search-btn">
          <MdSearch name="search-outline"/>
          {/* <ion-icon name="search-outline"></ion-icon> */}
        </button>
      </div>

      <div className="header-user-actions">
        <button className="action-btn"><MdPersonOutline name="person-outline"/></button>
        <button className="action-btn">
          <MdOutlineFavoriteBorder name="heart-outline"/>
          <span className="count">0</span>
        </button>
        <button className="action-btn">
          <MdOutlineShoppingCart name="bag-handle-outline"/>
          <span className="count">0</span>
        </button>
      </div>

    </div>

  </div>



  {/* <!-- desktop nav --> */}
  <nav className="desktop-navigation-menu">

    <div className="container">
      <ul className="desktop-menu-category-list">
        <li className="menu-category">
          <a href="/" className="menu-title">Home</a>
        </li>
        <li className="menu-category">
          <a href="/" className="menu-title">Categories</a>
          {/* <div className="dropdown-panel">

            <ul className="dropdown-panel-list">
              <li className="menu-title"><a href="/">Electronics</a></li>
              <li className="panel-list-item"><a href="/">Desktop</a></li>
              <li className="panel-list-item"><a href="/">Laptop</a></li>
              <li className="panel-list-item"><a href="/">Camera</a></li>
              <li className="panel-list-item"><a href="/">Tablet</a></li>
              <li className="panel-list-item"><a href="/">Headphone</a></li>
              <li className="panel-list-item">
                <a href="/">
                  <img src="./assets/images/electronics-banner-1.jpg" alt="headphone collection" width="250"
                    height="119"/>
                </a>
              </li>
            </ul>

            <ul className="dropdown-panel-list">
              <li className="menu-title"><a href="/">Men's</a></li>
              <li className="panel-list-item"><a href="/">Formal</a></li>
              <li className="panel-list-item"><a href="/">Casual</a></li>
              <li className="panel-list-item"><a href="/">Sports</a></li>
              <li className="panel-list-item"><a href="/">Jacket</a></li>
              <li className="panel-list-item"><a href="/">Sunglasses</a></li>
              <li className="panel-list-item">
                <a href="/">
                  <img src="./assets/images/mens-banner.jpg" alt="men's fashion" width="250" height="119"/>
                </a>
              </li>
            </ul>

            <ul className="dropdown-panel-list">
              <li className="menu-title"><a href="/">Women's</a></li>
              <li className="panel-list-item"><a href="/">Formal</a></li>
              <li className="panel-list-item"><a href="/">Casual</a></li>
              <li className="panel-list-item"><a href="/">Perfume</a></li>
              <li className="panel-list-item"><a href="/">Cosmetics</a></li>
              <li className="panel-list-item"><a href="/">Bags</a></li>
              <li className="panel-list-item">
                <a href="/">
                  <img src="./assets/images/womens-banner.jpg" alt="women's fashion" width="250" height="119"/>
                </a>
              </li>
            </ul>

            <ul className="dropdown-panel-list">
              <li className="menu-title"><a href="/">Electronics</a></li>
              <li className="panel-list-item"><a href="/">Smart Watch</a></li>
              <li className="panel-list-item"><a href="/">Smart TV</a></li>
              <li className="panel-list-item"><a href="/">Keyboard</a></li>
              <li className="panel-list-item"><a href="/">Mouse</a></li>
              <li className="panel-list-item"><a href="/">Microphone</a></li>
              <li className="panel-list-item">
                <a href="/">
                  <img src="./assets/images/electronics-banner-2.jpg" alt="mouse collection" width="250" height="119"/>
                </a>
              </li>
            </ul>

          </div> */}
        </li>

        <li className="menu-category">
          <a href="/" className="menu-title">Men's</a>
          <ul className="dropdown-list">
            <li className="dropdown-item"><a href="/">Shirt</a></li>
            <li className="dropdown-item"><a href="/">Shorts + Jeans</a></li>
            <li className="dropdown-item"><a href="/">Safety Shoes</a></li>
            <li className="dropdown-item"><a href="/">Wallet</a></li>
          </ul>
        </li>

        <li className="menu-category">
          <a href="/" className="menu-title">Women's</a>
          <ul className="dropdown-list">
            <li className="dropdown-item"><a href="/">Dress + Frock</a></li>
            <li className="dropdown-item"><a href="/">Earrings</a></li>
            <li className="dropdown-item"><a href="/">Necklace</a></li>
            <li className="dropdown-item"><a href="/">Makeup Kit</a></li>
          </ul>
        </li>

        <li className="menu-category">
          <a href="/" className="menu-title">Jewelry</a>
          <ul className="dropdown-list">
            <li className="dropdown-item"><a href="/">Earrings</a></li>
            <li className="dropdown-item"><a href="/">Couple Rings</a></li>
            <li className="dropdown-item"><a href="/">Necklace</a></li>
            <li className="dropdown-item"><a href="/">Bracelets</a></li>
          </ul>
        </li>

        <li className="menu-category">
          <a href="/" className="menu-title">Perfume</a>
          <ul className="dropdown-list">
            <li className="dropdown-item"><a href="/">Clothes Perfume</a></li>
            <li className="dropdown-item"><a href="/">Deodorant</a></li>
            <li className="dropdown-item"> <a href="/">Flower Fragrance</a></li>
            <li className="dropdown-item"><a href="/">Air Freshener</a></li>
          </ul>
        </li>

        <li className="menu-category">
          <a href="/" className="menu-title">Blog</a>
        </li>

        <li className="menu-category">
          <a href="/" className="menu-title">Hot Offers</a>
        </li>

      </ul>

    </div>

  </nav>

  {/* <!--  MOBILE NAVIGATION --> */}
  <div className="mobile-bottom-navigation">

    <button className="action-btn" onClick={handleToggle} data-mobile-menu-open-btn>
    {!toggle ? (
            <MdOutlineMenu name="menu-outline" />
          ) : (
            <MdClose />
          )}

      {/* <MdOutlineMenu name="menu-outline" /> */}
    </button>

    <div className="right">
      <button className="action-btn">
        <MdOutlineHome name="home-outline" />
      </button>

      <button className="action-btn">
        <MdOutlineFavoriteBorder name="heart-outline" />
        <span className="count">0</span>
      </button>

      <button className="action-btn">
        <MdOutlineShoppingCart name="bag-handle-outline" />
        <span className="count">0</span>
      </button>
    </div>

    {/* <button className="action-btn" data-mobile-menu-open-btn>
      <MdGridView name="grid-outline" />
    </button> */}

  </div>

  {/* <!-- mobile navigation --> */}

  {/* className={toggle ? "menu active" : "menu"} */}

  {/* <nav className="mobile-navigation-menu  has-scrollbar" data-mobile-menu> */}
  <nav className={toggle ?
    "mobile-navigation-menu  has-scrollbar active" :
    "mobile-navigation-menu  has-scrollbar"
  } data-mobile-menu>
    <div className="menu-top">
      <h2 className="menu-title">Menu</h2>
      <button className="menu-close-btn" onClick={handleToggle} data-mobile-menu-close-btn>
        <MdClose name="close-outline" />
      </button>
    </div>


    <ul className="mobile-menu-category-list">
    {/* pull out this component into 'DesktopTabs.jsx' */}

      <li className="menu-category"><a href="/" className="menu-title">Home</a></li>
      <li className="menu-category">
        <button className={mens ? "accordion-menu active" : "accordion-menu" } onClick={handleMensToggle}>
          <p className="menu-title">Men's</p>
          <div>
            <MdOutlineKeyboardArrowDown name="add-outline" className="add-icon"/>
            <MdOutlineKeyboardArrowUp name="remove-outline" className="remove-icon" />
          </div>
        </button>
        <ul className={mens ? "submenu-category-list active" : "submenu-category-list"}>
          <li className="submenu-category">
            <a href="/" className="submenu-title">Shirt</a>
          </li>
          <li className="submenu-category">
            <a href="/" className="submenu-title">Shorts + Jeans</a>
          </li>
          <li className="submenu-category">
            <a href="/" className="submenu-title">Safety Shoes</a>
          </li>
          <li className="submenu-category">
            <a href="/" className="submenu-title">Wallet</a>
          </li>
        </ul>
      </li>

      <li className="menu-category">
        <button className={womens ? "accordion-menu active" : "accordion-menu" } onClick={handleWomensToggle}>
          <p className="menu-title">Women's</p>
          <div>
            <MdOutlineKeyboardArrowDown name="add-outline" className="add-icon"/>
            <MdOutlineKeyboardArrowUp name="remove-outline" className="remove-icon" />
          </div>
        </button>
        <ul className={womens ? "submenu-category-list active" : "submenu-category-list"}>
          <li className="submenu-category">
            <a href="/" className="submenu-title">Dress + Frock</a>
          </li>
          <li className="submenu-category">
            <a href="/" className="submenu-title">Earrings</a>
          </li>
          <li className="submenu-category">
            <a href="/" className="submenu-title">Necklace</a>
          </li>
          <li className="submenu-category">
            <a href="/" className="submenu-title">Makeup Kit</a>
          </li>
        </ul>
      </li>

      <li className="menu-category">
        <a href="/" className="menu-title">Hot Offers</a>
      </li>

      <li className="menu-category">
        <a href="/" className="menu-title">Accessories</a>
      </li>

      <li className="menu-category">
        <a href="/" className="menu-title">Contact</a>
      </li>

    </ul>

    {/* <!-- slide-in menu-bottom --> */}
    <div className="menu-bottom">
      <ul className="menu-category-list">

        <li className="menu-category">

          <button className={language ? "accordion-menu active" : "accordion-menu" } onClick={handleLanguageToggle}>
            <p className="menu-title">Language</p>
            <MdOutlineKeyboardArrowDown name="add-outline" className="add-icon"/>
            <MdOutlineKeyboardArrowUp name="remove-outline" className="remove-icon" />
          </button>

          <ul className={language ? "submenu-category-list active" : "submenu-category-list"}>
            <li className="submenu-category">
              <a href="/" className="submenu-title">English</a>
            </li>
            <li className="submenu-category">
              <a href="/" className="submenu-title">Espa&ntilde;ol</a>
            </li>
            <li className="submenu-category">
              <a href="/" className="submenu-title">Fren&ccedil;h</a>
            </li>
          </ul>

        </li>

        <li className="menu-category">
          <button className={currency ? "accordion-menu active" : "accordion-menu" } onClick={handleCurrencyToggle}>
            <p className="menu-title">Currency</p>
            <MdOutlineKeyboardArrowDown name="add-outline" className="add-icon"/>
            <MdOutlineKeyboardArrowUp name="remove-outline" className="remove-icon" />
          </button>
          <ul className={currency ? "submenu-category-list active" : "submenu-category-list"}>
            <li className="submenu-category">
              <a href="/" className="submenu-title">USD $</a>
            </li>
            <li className="submenu-category">
              <a href="/" className="submenu-title">EUR &euro;</a>
            </li>
          </ul>
        </li>

      </ul>

{/* refactor social icons into their own data model + separate component here */}
      <ul className="menu-social-container">
        <li>
          <a href="/" className="social-link">
            <FaFacebookSquare name="logo-facebook" />
          </a>
        </li>
        <li>
          <a href="/" className="social-link">
            <FaTwitter name="logo-twitter" />
          </a>
        </li>
        <li>
          <a href="/" className="social-link">
            <FaInstagram name="logo-instagram" />
          </a>
        </li>
        <li>
          <a href="/" className="social-link">
            <FaTiktok name="logo-tiktok" />
          </a>
        </li>
      </ul>

    </div>

  </nav>

</header>
    </>
  )
}

export default Navbar3