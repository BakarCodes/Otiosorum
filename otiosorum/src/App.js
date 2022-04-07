import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Pages/Home';
import Account from './Components/Pages/Account';
import Products from './Components/Pages/Products';
import Services from './Components/Pages/Services';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <div className='Routes'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Account" element={<Account/>}/>
      </Routes>
      </div>

    </div>
  )
}

export default App
