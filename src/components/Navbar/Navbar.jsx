import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [cartOverlay, setCartOverlay] = React.useState(false);
  const cartItemCount = 3; // Example item count, you might want to pass this as a prop or get from context

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
      </ul>
      {/* <div className="app__navbar-login">
        <div className="app__navbar-cart" onClick={() => setCartOverlay(true)}>
          <FaShoppingCart color="#fff" fontSize={27} />
          <span className="cart__item-count">{cartItemCount}</span>
        </div>
      </div> */}
      <div className="app__navbar-smallscreen">
      <div className="app__navbar-login">
        <div className="app__navbar-cart" onClick={() => setCartOverlay(true)}>
          <FaShoppingCart color="#fff" fontSize={27} />
          <span className="cart__item-count">{cartItemCount}</span>
        </div>
      </div>
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
            </ul>
          </div>
          
        )}
      </div>
      {cartOverlay && (
        <div className="app__navbar-cart_overlay">
          <div className="cart__overlay-content">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setCartOverlay(false)} />
            <h2>Your Cart</h2>
            {}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;