import React from 'react';
import Navbar from './components/Navbar'
import './App.css'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/screens/Home'
import Login from './components/screens/Login'
import Signup from './components/screens/Signup'
import Profile from './components/screens/Profile'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>        
        <Route path="/profile">
          <Profile />
        </Route> 
      </BrowserRouter>
    </div>
  );
}

export default App;
