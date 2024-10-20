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
import Product from './components/product';
import ProtectedRoute from './components/protectedRoute';
import Cart from './components/cart';




function App(store) {
  let user = store[0]
  let loggedin = Object.getOwnPropertyNames(store[0].getState()).includes('user')
  let validUser = null;
  if(loggedin){
    validUser = store[0].getState()['user']['email']
  }
  const [isAuthenticated, setIsAuthenticated] = React.useState(validUser!==''?true:false);
  store[0].subscribe(()=>{
     loggedin = Object.getOwnPropertyNames(store[0].getState()).includes('user')
     validUser = null;
     if(loggedin){
      validUser = store[0].getState()['user']['email']
    }
    
    validUser!==''?setIsAuthenticated(true):setIsAuthenticated(false)
  })
 
  return (
      <BrowserRouter>
      <ResponsiveAppBar user = {user}></ResponsiveAppBar>
        <Routes>
        <Route path='/' element = {<HomePage user = {user}></HomePage>}></Route>
        <Route path = '/product/:pid' element = {<Product user = {user}></Product>}></Route>
        <Route path = "/user/sign-in"  element = {<SignIn user = {user} name = "User"></SignIn>}></Route>
        <Route path = "/user/sign-up"  element = {<SignUp name = "user"></SignUp>}></Route>
        <Route path = "/user/checkout"  element = {<Checkout store = {store[0]} ></Checkout>}></Route>
        <Route path = "/user/profile" element = {<ProtectedRoute  component={Profile} isAuthenticated={isAuthenticated}  user = {store[0]}></ProtectedRoute>}></Route>        <Route path = "/profile" element = {<ProtectedRoute path = "/profile" component={Profile} isAuthenticated={isAuthenticated}  user = {store[0]}></ProtectedRoute>}></Route>
        <Route path = "/user/cart" element = {<ProtectedRoute  component={Cart} isAuthenticated={isAuthenticated}  store = {store[0]}></ProtectedRoute>}></Route>
      </Routes>
      </BrowserRouter>

  );
}
export default App;