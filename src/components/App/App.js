import React from 'react'
import Home from '../../containers/Home/Home';
import Footer from '../../containers/Footer/Footer';
import Header from '../../containers/Header/Header';

import './App.css';
require('dotenv').config()
const App = () => (
  <div>
    <Header />
    <Home />
    <Footer />

  </div>
)

export default App
