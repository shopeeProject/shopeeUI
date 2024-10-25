// src/store.js
import { createStore, combineReducers } from 'redux';
import userReducer from './userStore';
import productReducer from './productsStore';
import cartReducer from './userCartStore';
import paymentReducer from './paymentStore';
import { configureStore } from '@reduxjs/toolkit';
import StateLoader from '../stateloader';

let stateloader = new StateLoader();

const rootReducer = combineReducers({
    user: userReducer,
    products: productReducer,
    cart: cartReducer,
    payment: paymentReducer,
});

const store = configureStore({reducer:rootReducer,preloadedState : stateloader.loadState()})
console.log(store.getState())
store.subscribe(() => {
    stateloader.saveState(store.getState());
});
export default store;
