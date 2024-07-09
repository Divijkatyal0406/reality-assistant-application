import React from 'react';

import { Header,SpecialMenu} from './container';
import { Navbar,SubHeading } from './components';


import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <SubHeading />
    <SpecialMenu />
  </div>
);

export default App;
