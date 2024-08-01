import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const tableNumber = params.get('table');

  const handleTrackOrderClick = () => {
    navigate('/track-order');
  };

  return (
    <div className="app__header app__wrapper section__padding vh-80" id="home">
      <div className="app__wrapper_info">
        <SubHeading title={tableNumber == null ? `Welcome Guest` : `Welcome Table No. ${tableNumber}`} />
        <h1 className="app__header-h1">Chase The New Flavour</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>Enjoy our complimentary snacks and beverages, thoughtfully curated for your refreshments</p>
        <div className="app__header-buttons">
          <button type="button" className="custom__button"><a href="#menu">Explore Menu</a></button>
          <button type="button" className="custom__button track-order-button" onClick={handleTrackOrderClick}>Track Order</button>
        </div>
      </div>

      {/* <div className="app__wrapper_img">
        <img src={images.welcome} alt="header_img" />
      </div> */}
    </div>
  );
};

export default Header;
