import React, { useState } from 'react';
import './MenuItem.css';

const MenuItem = ({ item, onChange }) => {
  const [itemValue, setItemValue] = useState(0);

  const handleIncrease = () => {
    setItemValue(prev => {
      const newValue = prev + 1;
      onChange(item, newValue);
      return newValue;
    });
  };

  const handleDecrease = () => {
    setItemValue(prev => {
      const newValue = prev - 1;
      onChange(item, newValue);
      return newValue;
    });
  };

  return (
    <div className="app__menuitem">
      <div className="app__menuitem-head">
        <div className="app__menuitem-name">
          <p className="p__cormorant" style={{ color: '#DCCA87' }}>{item.title}</p>
        </div>
        <div className="app__menuitem-dash" />
        <div className="app__menuitem-price">
          <p className="p__cormorant">{item.price}</p>
          <button onClick={handleDecrease} disabled={itemValue <= 0}>-</button>
          <span className="item-value">{itemValue}</span>
          <button onClick={handleIncrease}>+</button>
        </div>
      </div>
      <div className="app__menuitem-sub">
        <p className="p__opensans" style={{ color: '#AAAAAA' }}>{item.tags}</p>
      </div>
    </div>
  );
};

export default MenuItem;
