import React from 'react';
import Navbar from './components/Navbar'
import './App.css'
import {BrowserRouter, Route} from 'react-router-dom'
import { Router } from 'express';
import Home from './components/screens/Home'
import Login from './components/screens/Login'
import Signup from './components/screens/Signup'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Router path="/">
          <Home />
        </Router>
        <Router path="/">
          <Signup />
        </Router>
        <Router path="/">
          <Login />
        </Router>
        <Router path="/">
          <Profile />
        </Router> 
      </BrowserRouter>
    </div>
  );
}

export default App;
