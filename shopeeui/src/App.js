import './App.css';
import SignIn from './components/sign-in/SignIn';
import React from 'react';
import SignUp from './components/sign-up/SignUp';
import Checkout from './components/checkout/Checkout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from './components/navbar';
import authenticationservice from './backendservices/authenticationservice';
import HomePage from './components/home/home';
import Profile from './components/profile/profile';




function App(store) {
  let user = store[0]
 
  return (
      <BrowserRouter>
      <ResponsiveAppBar user = {user}></ResponsiveAppBar>
        <Routes>
        <Route path='/' element = {<HomePage user = {user}></HomePage>}></Route>
        <Route path = "/user/sign-in"  element = {<SignIn user = {user} name = "User"></SignIn>}></Route>
        <Route path = "/user/sign-up"  element = {<SignUp name = "user"></SignUp>}></Route>
        <Route path = "/user/checkout"  element = {<Checkout store = {store[0]} ></Checkout>}></Route>
        <Route path = "/profile" element = {<Profile user = {store[0]}></Profile>}></Route>
      </Routes>
      </BrowserRouter>

  );
}
export default App;