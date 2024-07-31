import React, { useState } from 'react';

import { Header } from './container';
import { Navbar } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrderTrackingPage from './container/OrderTrackingPage/OrderTrackingPage'
import './App.css';
import SpecialMenu from './container/SpecialMenu/SpecialMenu';
const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <Navbar cartItems={cartItems} setCartItems={setCartItems} />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <SpecialMenu cartItems={cartItems} setCartItems={setCartItems} />
            </>
          } 
        />
        <Route path="/track-order" element={<OrderTrackingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
