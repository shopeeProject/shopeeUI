// src/cartStore.js
import { createStore } from 'redux';

// Initial state
const initialState = {
    items: [],
};

// Action types
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';

// Reducer function
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, items: [...state.items, action.payload.item] };
        case REMOVE_FROM_CART:
            return { ...state, items: state.items.filter(item => item.id !== action.payload.id) };
        case CLEAR_CART:
            return { ...state, items: [] };
        default:
            return state;
    }
};

// Create the store
const cartStore = createStore(cartReducer);

// Action creators
export const addToCart = (item) => ({ type: ADD_TO_CART, payload: { item } });
export const removeFromCart = (id) => ({ type: REMOVE_FROM_CART, payload: { id } });
export const clearCart = () => ({ type: CLEAR_CART });

// Export the store
export default cartStore;
