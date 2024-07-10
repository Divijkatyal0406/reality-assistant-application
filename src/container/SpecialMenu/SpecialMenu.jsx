import React, { useState } from 'react';
import { SubHeading, MenuItem } from '../../components';
import { data } from '../../constants';
import './SpecialMenu.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const SpecialMenu = ({ cartItems, setCartItems }) => {
  const [showBeverages, setShowBeverages] = useState(false);
  const [showSnacks, setShowSnacks] = useState(false);

  const handleItemChange = (item, quantity) => {
    const existingItem = cartItems.find(cartItem => cartItem.title === item.title);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.title === item.title ? { ...cartItem, quantity } : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity }]);
    }
  };

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palatte" />
        <h1 className="headtext__cormorant">Today&apos;s Special</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <div className="app__specialMenu-menu_heading" onClick={() => setShowBeverages(!showBeverages)}>
            <p>Beverages</p>
            {showBeverages ? <FaChevronUp className="dropdown-icon" /> : <FaChevronDown className="dropdown-icon" />}
          </div>
          {showBeverages && (
            <div className="app__specialMenu_menu_items">
              {data.wines.map((wine, index) => (
                <MenuItem key={wine.title + index} item={wine} onChange={handleItemChange} />
              ))}
            </div>
          )}
        </div>

        <div className="app__specialMenu-menu_cocktails flex__center">
          <div className="app__specialMenu-menu_heading" onClick={() => setShowSnacks(!showSnacks)}>
            <p>Snacks</p>
            {showSnacks ? <FaChevronUp className="dropdown-icon" /> : <FaChevronDown className="dropdown-icon" />}
          </div>
          {showSnacks && (
            <div className="app__specialMenu_menu_items">
              {data.cocktails.map((cocktail, index) => (
                <MenuItem key={cocktail.title + index} item={cocktail} onChange={handleItemChange} />
              ))}
            </div>
          )}
        </div>
      </div>

      <div style={{ marginTop: 15 }}>
        <button type="button" className="custom__button">View More</button>
      </div>
    </div>
  );
};

export default SpecialMenu;
