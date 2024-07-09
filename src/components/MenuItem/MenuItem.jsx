import React, { useState } from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags,  }) => {
  const [itemValue, setItemValue] = useState(0);
  return(
    <>
      <div className="app__menuitem">
        <div className="app__menuitem-head">
          <div className="app__menuitem-name">
            <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
          </div>
          <div className="app__menuitem-dash" />
          <div className="app__menuitem-price">
            <p className="p__cormorant">{price}</p> 
            
            <button  onClick={()=> setItemValue(pre => pre -1 )} disabled={itemValue <= 0 ? true : false}>-</button>
            <span className='item-value'>{itemValue}</span>
            <button  onClick={()=> setItemValue(pre => pre + 1)}>+</button>
            
          </div>
        </div>

        <div className="app__menuitem-sub">
          <p className="p__opensans" style={{ color: '#AAAAAA' }}>{tags}</p>
        </div>
      </div>
    </>
  )
};

export default MenuItem 
