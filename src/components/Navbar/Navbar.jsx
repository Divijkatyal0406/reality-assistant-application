import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { BiDish } from "react-icons/bi";

import images from '../../constants/images';
import './Navbar.css';

const Navbar = ({ cartItems, setCartItems }) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [cartOverlay, setCartOverlay] = useState(false);
    const [instructions, setInstructions] = useState('');
    
    const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const handleSendOrder = () => {
        const params = new URLSearchParams(window.location.search);
        const tableNumber = params.get('table');

        const orderSummary = cartItems.map(item => `${item.title} - ${item.quantity}`).join('\n');
        const message = `Table No. ${tableNumber} Order Summary:\n${orderSummary}\n\nInstructions: ${instructions}`;

        const encodedMessage = encodeURIComponent(message);
        const num = '+919540766207';
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${num}&text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');

        setCartOverlay(false);
        setInstructions('');
        
    };

    const handleCancelOrder = () => {
        setCartItems([]);
        setCartOverlay(false);
        handleReload();
         
        
    };
    const handleReload = () => {
        window.location.reload();
      };

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
            <div className="flex__center">
                <div className="app__navbar-cart" onClick={() => setCartOverlay(true)}>
                    <BiDish color="#fff" fontSize={27} />
                    <span className="cart__item-count">{cartItemCount}</span>
                </div>
                <div className="block lg:hidden">
                    <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
                    {toggleMenu && (
                        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                            <ul className="app__navbar-smallscreen_links">
                                <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
                                <li><a href="https://www.viraajventures.com/" onClick={() => setToggleMenu(false)}>About</a></li>
                                <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            {cartOverlay && (
                <div className="app__navbar-cart_overlay">
                    <div className="cart__overlay-content">
                        <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setCartOverlay(false)} />
                        <h2>Your Cart</h2>
                        <div className="cart__items">
                            {cartItems.map(item => (
                                <div className="cart__item" key={item.title}>
                                    <span className="cart__item-title">{item.title}</span>
                                    <span className="cart__item-quantity">{item.quantity} x {item.price}</span>
                                </div>
                            ))}
                        </div>
                        <textarea
                            className="cart__instructions"
                            value={instructions}
                            onChange={(e) => setInstructions(e.target.value)}
                            placeholder="Any special instructions?"
                        />
                        <div className="cart__buttons">
                            <button className="custom__button send__order-button" onClick={handleSendOrder}>Send Order</button>
                            <button className="custom__button cancel__order-button" onClick={handleCancelOrder}>Cancel Order</button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
