import React from 'react';

import { Header } from './container';
import { Navbar } from './components';
import './App.css';
import SpecialMenu from './container/SpecialMenu/SpecialMenu';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <SpecialMenu/>
  </div>
);

export default App;
