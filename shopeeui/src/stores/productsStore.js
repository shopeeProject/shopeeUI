// src/productStore.js
import { createStore } from 'redux';

// Initial state
export const productInitialState = {
    products: [],
};

// Action types
const SET_PRODUCTS = 'SET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';

// Reducer function
const productReducer = (state = productInitialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return { ...state, products: action.payload.products };
        case ADD_PRODUCT:
            return { ...state, products: [...state.products, action.payload.product] };
        default:
            return state;
    }
};

// Create the store
const productStore = createStore(productReducer);

// Action creators
export const setProducts = (products) => ({ type: SET_PRODUCTS, payload: { products } });
export const addProduct = (product) => ({ type: ADD_PRODUCT, payload: { product } });

// Export the store
export default productStore;
