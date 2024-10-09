// src/paymentStore.js
import { createStore } from 'redux';

// Initial state
const initialState = {
    paymentDetails: {
        method: '',
        cardNumber: '',
        expirationDate: '',
    },
};

// Action types
const SET_PAYMENT_METHOD = 'SET_PAYMENT_METHOD';
const SET_CARD_DETAILS = 'SET_CARD_DETAILS';

// Reducer function
const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAYMENT_METHOD:
            return { ...state, paymentDetails: { ...state.paymentDetails, method: action.payload.method } };
        case SET_CARD_DETAILS:
            return { ...state, paymentDetails: { ...state.paymentDetails, ...action.payload.details } };
        default:
            return state;
    }
};

// Create the store
const paymentStore = createStore(paymentReducer);

// Action creators
export const setPaymentMethod = (method) => ({ type: SET_PAYMENT_METHOD, payload: { method } });
export const setCardDetails = (details) => ({ type: SET_CARD_DETAILS, payload: { details } });

// Export the store
export default paymentStore;
