// src/store.js
import { createStore, combineReducers } from 'redux';
import userReducer from './userStore';
import productReducer from './productStore';
import cartReducer from './cartStore';
import paymentReducer from './paymentStore';

const rootReducer = combineReducers({
    user: userReducer,
    products: productReducer,
    cart: cartReducer,
    payment: paymentReducer,
});

const store = createStore(rootReducer);

export default store;
