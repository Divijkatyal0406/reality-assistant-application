import React, { useState } from 'react';

import { Header } from './container';
import { Navbar } from './components';
import './App.css';
import SpecialMenu from './container/SpecialMenu/SpecialMenu';
const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return(
    <>
      <Navbar cartItems={cartItems} setCartItems={setCartItems} />
      <Header />
      <SpecialMenu cartItems={cartItems} setCartItems={setCartItems} />
    </>
  )
};

export default App;
