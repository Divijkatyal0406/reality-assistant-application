import React, { useState } from "react";
import "./MenuItem.css";
import { data } from "../../constants";

const MenuItem = ({
  title,
  price,
  tags,
  cartItems,
  setCartItems,
  quantity,
  status,
}) => {
  const [itemValue, setItemValue] = useState(quantity);

  const handleQuantityChange = (delta) => {
    const newQuantity = itemValue + delta;
    if (newQuantity > data.MAX_QUANTITY) return;
    setItemValue(newQuantity);

    const updatedCart = cartItems.map((item) =>
      item.title === title ? { ...item, quantity: item.quantity + delta } : item
    );

    if (newQuantity > 0) {
      const itemInCart = cartItems.find((item) => item.title === title);
      if (itemInCart) {
        setCartItems(updatedCart);
      } else {
        setCartItems([...cartItems, { title, price, quantity: newQuantity }]);
      }
    } else {
      setCartItems(updatedCart.filter((item) => item.quantity > 0));
    }
  };

  return (
    <div className="app__menuitem">
      <div className="app__menuitem-head" style={{ opacity: status ? 1 : 0.5 }}>
        <div className="app__menuitem-name">
          <p className="p__cormorant" style={{ color: "#DCCA87" }}>
            {title}
          </p>
        </div>
        <div className="app__menuitem-dash" />
        <div className="app__menuitem-price">
          <p className="p__cormorant">{price}</p>
          <button
            onClick={() => handleQuantityChange(-1)}
            disabled={itemValue <= 0}
          >
            -
          </button>
          <span className="item-value">{itemValue}</span>
          <button onClick={() => handleQuantityChange(1)}>+</button>
        </div>
      </div>
      <div className="app__menuitem-sub">
        <p className="p__opensans" style={{ color: "#AAA" }}>
          {tags}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
