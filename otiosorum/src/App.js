import React from 'react';
import { ReactDOM } from 'react';
import './App.css';
import Home from './Components/Pages/Home'
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
      <div className='App'>
        <Navbar/>
          <div className='Routes'>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </div>
      </div>
      
  );
}

export default App;
