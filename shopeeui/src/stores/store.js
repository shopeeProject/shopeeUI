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

const store1 = configureStore({reducer:rootReducer,preloadedState : stateloader.loadState()})
const store = createStore(rootReducer);
console.log(store1.getState())
store1.subscribe(() => {
    stateloader.saveState(store1.getState());
});
export default store1;
