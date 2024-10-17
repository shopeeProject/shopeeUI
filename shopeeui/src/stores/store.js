// src/store.js
import { createStore, combineReducers } from 'redux';
import userReducer from './userStore';
import productReducer from './productsStore';
import cartReducer from './userCartStore';
import paymentReducer from './paymentStore';

const rootReducer = combineReducers({
    user: userReducer,
    products: productReducer,
    cart: cartReducer,
    payment: paymentReducer,
});

const store = createStore(rootReducer);

export default store;
