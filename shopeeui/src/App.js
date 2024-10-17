import './App.css';
import SignIn from './components/sign-in/SignIn';
import React from 'react';
import SignUp from './components/sign-up/SignUp';
import Checkout from './components/checkout/Checkout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from './components/navbar';


function App(store) {
  console.log(store[0].getState())
 
  return (
      <BrowserRouter>
      <ResponsiveAppBar></ResponsiveAppBar>
        <Routes>
        <Route path = "/user/sign-in"  element = {<SignIn store = {store[0]} ></SignIn>}></Route>
        <Route path = "/user/sign-up"  element = {<SignUp name = "user"></SignUp>}></Route>
        <Route path = "/user/checkout"  element = {<Checkout store = {store[0]} ></Checkout>}></Route>
      </Routes>
      </BrowserRouter>

  );
}
export default App;