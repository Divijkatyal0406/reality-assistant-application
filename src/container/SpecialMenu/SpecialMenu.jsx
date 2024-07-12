import React, { useState } from 'react';
import { SubHeading, MenuItem } from '../../components';
import { data } from '../../constants';
import './SpecialMenu.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import {getQuantity} from "../../util/helpers";


const SpecialMenu = ({ cartItems, setCartItems }) => {
  const [showBeverages, setShowBeverages] = useState(false);
  const [showSnacks, setShowSnacks] = useState(false);
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palate" />
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
                <MenuItem
                    key={wine.title + index}
                    title={wine.title}
                    price={wine.price}
                    tags={wine.tags}
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                    quantity={getQuantity(wine.title, cartItems)}
                />
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
                <MenuItem
                    key={cocktail.title + index}
                    title={cocktail.title}
                    price={cocktail.price}
                    tags={cocktail.tags}
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                    quantity={getQuantity(cocktail.title, cartItems)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      

    </div>
  );
};

export default SpecialMenu;
