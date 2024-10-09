import './App.css';
import SignIn from './components/sign-in/SignIn';
import React from 'react'
import ReactDOM from 'react-dom'
import SignUp from './components/sign-up/SignUp';
import Checkout from './components/checkout/Checkout'
import PaymentForm from './components/checkout/PaymentForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from './components/navbar';


function App(store) {
  console.log(store[0].getState())
  return (

      <BrowserRouter>
      <ResponsiveAppBar></ResponsiveAppBar>
        <Routes>

        <Route path = "/user/sign-in"  element = {<SignIn store2 = {store[1]} name = "User"></SignIn>}></Route>
        <Route path = "/user/sign-up"  element = {<SignUp name = "user"></SignUp>}></Route>
        <Route path = "/user/checkout"  element = {<Checkout name = "user"></Checkout>}></Route>

      </Routes>
      </BrowserRouter>

  );
}
export default App;