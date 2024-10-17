// src/store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
    
        name: '',
        email: '',
        address: '',
        orders: [],
    
};

// Action types
const SET_USER = 'SET_USER';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const ADD_ORDER = 'ADD_ORDER';
const REMOVE_USER = "REMOVE_USER";

// Reducer function
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            let state_copy = Object.assign({},state)
            state_copy["name"]= action.payload.name
            state_copy["email"] = action.payload.email;
            return state_copy;
        case REMOVE_USER:
            return initialState
        case UPDATE_ADDRESS:
            return {
                
                    ...state.user,
                    ...state.name,
                    address: action.payload.address,
                
            };
        case ADD_ORDER:
            return {
                
                    ...state.user,
                    orders: [...state.user.orders, action.payload.order],
               
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

export const removeUser = (email) => ({
    type: REMOVE_USER,
    payload:{email}
})

export const updateAddress = (address) => ({
    type: UPDATE_ADDRESS,
    payload: { address },
});

export const addOrder = (order) => ({
    type: ADD_ORDER,
    payload: { order },
});

// Export the store
export default userReducer;
