// src/cartStore.js
import { act } from 'react';
import { createStore } from 'redux';

// Initial state
const initialState = {
    items: [

    ],
    value:0,
    size:0
};

// Action types
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';
const UPDATE_PRODUCT_IN_CART = 'UPDATE_PRODUCT_IN_CART';

// Reducer function
const cartReducer = (state = initialState, action) => {
    var newState;
    var item;
    switch (action.type) {
        
        case ADD_TO_CART:
            newState = JSON.parse(JSON.stringify(state));
            item = newState.items.filter(item => item.itemId === action.payload.pid)
            console.log(item,action.payload)
            if (item.length!=0)return state;
            console.log(action.payload)
            newState.items.push(
                {
                    "itemId":action.payload.pid,
                    "itemName":action.payload.name,
                    "count":1,
                    "price":action.payload.price
                }
            )
            newState.value = newState.value + action.payload.price;
            newState.size = newState.items.length
            console.log(newState)
            return newState;
        case REMOVE_FROM_CART:
            newState = JSON.parse(JSON.stringify(state));
            item = newState.items.filter(item => item.itemId === action.payload.pid)
            console.log(item,action.payload)
            if (item.length == 0)return newState;
            newState.size = newState.size - 1;
            newState.value = newState.value - item[0].count*item[0].price;
            newState.items = newState.items.filter(item => item.itemId   !== action.payload.pid)
            return newState;
        case UPDATE_PRODUCT_IN_CART:
            newState = JSON.parse(JSON.stringify(state));
            item = newState.items.filter(item => item.itemId === action.payload.pid)
            console.log(item,action.payload)
            if (item.length == 0)return newState;
            let idx = newState.items.findIndex(item => item.itemId === action.payload.pid)
            console.log(idx)
            let delta = action.payload.count - newState.items[idx]['count'];
            newState.items[idx]['count'] = action.payload.count
            console.log(newState.value,delta,item[0].price)
            newState.value = newState.value + delta*item[0].price
            console.log(newState.value)
            return newState
        case CLEAR_CART:
            return initialState;
        default:
            return state;
    }
};

// Create the store
const cartStore = createStore(cartReducer);

// Action creators
export const addToCart = (item) => ({ type: ADD_TO_CART, payload: item});
export const removeFromCart = (pid) => ({ type: REMOVE_FROM_CART, payload: {pid} });
export const clearCart = () => ({ type: CLEAR_CART });
export const updateProductInCart = (pid,count) => ({type:UPDATE_PRODUCT_IN_CART,payload:{pid,count}})

// Export the store
export default cartReducer;
