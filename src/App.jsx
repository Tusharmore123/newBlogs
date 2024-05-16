import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { conf } from '../config/config';
import './App.css'
import Header from './Components/header';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
return (
<>
  <Header/>
  <Outlet/>
  <Footer/>
</>
)
}

export default App
