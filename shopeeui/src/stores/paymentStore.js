// src/paymentStore.js

import { createStore } from "redux";

// Action types
const UPDATE_PERSONAL_DETAILS = 'UPDATE_PERSONAL_DETAILS';
const UPDATE_PAYMENT_DETAILS = 'UPDATE_PAYMENT_DETAILS';

const initialState = {
        firstName: '',
        lastName: '',
        line1: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        method: '',
        cardNumber: '',
        expirationDate: '',
  };
  
// Reducer function
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_PERSONAL_DETAILS:
        return action.payload;
        case UPDATE_PAYMENT_DETAILS:
        return action.payload;
  
      default:
        return state;
    }
  };
  

// Action creators
export const updatePersonalDetails = (updatedFields) => ({
  type: UPDATE_PERSONAL_DETAILS,
  payload: updatedFields,  // This will contain fields to be updated, e.g., { firstName: 'Jane' }
});

export const updatePaymentDetails = (updatedFields) => ({
  type: UPDATE_PAYMENT_DETAILS,
  payload: updatedFields,  // This will contain fields to be updated, e.g., { method: 'Credit Card' }
});

  export default reducer;
