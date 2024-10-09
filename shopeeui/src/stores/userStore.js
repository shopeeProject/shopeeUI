// src/store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
    user: {
        name: '',
        email: '',
        address: '',
        orders: [],
    },
};

// Action types
const SET_USER = 'SET_USER';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const ADD_ORDER = 'ADD_ORDER';

// Reducer function
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: {
                    ...state.user,
                    name: action.payload.name,
                    email: action.payload.email,
                },
            };
        case UPDATE_ADDRESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    address: action.payload.address,
                },
            };
        case ADD_ORDER:
            return {
                ...state,
                user: {
                    ...state.user,
                    orders: [...state.user.orders, action.payload.order],
                },
            };
        default:
            return state;
    }
};

// Create the store
const store = createStore(userReducer);

// Action creators
export const setUser = (name, email) => ({
    type: SET_USER,
    payload: { name, email },
});

export const updateAddress = (address) => ({
    type: UPDATE_ADDRESS,
    payload: { address },
});

export const addOrder = (order) => ({
    type: ADD_ORDER,
    payload: { order },
});

// Export the store
export default store;
