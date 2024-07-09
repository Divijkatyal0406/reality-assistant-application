import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => {
  const params = new URLSearchParams(window.location.search);
  const tableNumber = params.get('table');

  return(
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title={`Welcome Table No. ${tableNumber}`} />
        <h1 className="app__header-h1">Chase The New Flavour</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>Enjoy our complimentary snacks and beverages, thoughtfully curated for your refreshments</p>
        <button type="button" className="custom__button">Explore Menu</button>
      </div>

    {/* <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div> */}
  </div>
  );
};

export default Header;