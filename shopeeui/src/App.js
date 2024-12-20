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
import AddProductForm from './components/addProduct';
import GetSellerProducts from './components/getSellerProducts';
import EditProductForm from './components/editProduct';




function App(store) {
  let user = store[0]
  let loggedin = Object.getOwnPropertyNames(store[0].getState()).includes('user')
  let validUser = null;
  if(loggedin){
    validUser = store[0].getState()['user']['email']
  }
  const [isAuthenticated, setIsAuthenticated] = React.useState(validUser!==''?true:false);
  const [currentEntity,setCurrentEntity] = React.useState(loggedin?store[0].getState()['user']['entity']:"")
  store[0].subscribe(()=>{
     loggedin = Object.getOwnPropertyNames(store[0].getState()).includes('user')
     validUser = null;
     if(loggedin){
      validUser = store[0].getState()['user']['email']
      setCurrentEntity(store[0].getState()['user']['entity'])
    }
    
    validUser!==''?setIsAuthenticated(true):setIsAuthenticated(false)
  })
 
  return (
      <BrowserRouter>
      <ResponsiveAppBar store = {user}></ResponsiveAppBar>
        <Routes>
        <Route path='/' element = {<HomePage store = {user}></HomePage>}></Route>
        {console.log(currentEntity)}
        <Route path='/seller/get-products'element ={<ProtectedRoute component={GetSellerProducts} isAuthenticated={isAuthenticated && currentEntity === "seller"}  ></ProtectedRoute>}></Route>
        <Route path='/seller/add-product'element ={<ProtectedRoute component={AddProductForm} isAuthenticated={isAuthenticated && currentEntity === "seller"}  ></ProtectedRoute>}></Route>
        <Route path = '/product/:pid' element = {<Product store = {user}></Product>}></Route>
        <Route path = '/product/edit/:pid' element = {<ProtectedRoute component={EditProductForm} isAuthenticated={isAuthenticated && currentEntity === "seller"} edit = {true}  ></ProtectedRoute>}></Route>
        <Route path = "/user/sign-in"  element = {<SignIn store = {user} name = "User" entity = "user"></SignIn>}></Route>
        <Route path = "/user/sign-up"  element = {<SignUp name = "user" entity = "user"></SignUp>}></Route>
        <Route path = "/seller/sign-in"  element = {<SignIn store = {user} name = "Shopee Business" entity = "seller"></SignIn>}></Route>
        <Route path = "/seller/sign-up"  element = {<SignUp name = "Shopee Business" entity = "seller"></SignUp>}></Route>
        <Route path = "/user/checkout"  element = {<Checkout store = {store[0]} ></Checkout>}></Route>
        <Route path = "/profile" element = {<ProtectedRoute  component={Profile} isAuthenticated={isAuthenticated}  store = {store[0]}></ProtectedRoute>}></Route>
        {/* <Route path = "/profile" element = {<ProtectedRoute path = "/profile" component={Profile} isAuthenticated={isAuthenticated}  user = {store[0]}></ProtectedRoute>}></Route> */}
        <Route path = "/user/cart" element = {<ProtectedRoute  component={Cart} isAuthenticated={isAuthenticated}  store = {store[0]}></ProtectedRoute>}></Route>
      </Routes>
      </BrowserRouter>

  );
}
export default App;