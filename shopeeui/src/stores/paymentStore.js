

// Action types
const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';
const UPDATE_LINE1 = 'UPDATE_LINE1';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_ZIP_CODE = 'UPDATE_ZIP_CODE';
const UPDATE_COUNTRY = 'UPDATE_COUNTRY';
const UPDATE_METHOD = 'UPDATE_METHOD';
const UPDATE_CARD_NUMBER = 'UPDATE_CARD_NUMBER';
const UPDATE_EXPIRATION_DATE = 'UPDATE_EXPIRATION_DATE';
const UPDATE_CVV = 'UPDATE_CVV';

export const paymentInitialState = {
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
    cvv:'',
};

// Reducer function
const paymentReducer = (state = paymentInitialState, action) => {
    console.log('inside payment store')
    switch (action.type) {
        case UPDATE_FIRST_NAME:
            return { ...state, firstName: action.payload };
        case UPDATE_LAST_NAME:
            return { ...state, lastName: action.payload };
        case UPDATE_LINE1:
            return { ...state, line1: action.payload };
        case UPDATE_CITY:
            return { ...state, city: action.payload };
        case UPDATE_STATE:
            return { ...state, state: action.payload };
        case UPDATE_ZIP_CODE:
            return { ...state, zipCode: action.payload };
        case UPDATE_COUNTRY:
            return { ...state, country: action.payload };
        case UPDATE_METHOD:
            return { ...state, method: action.payload };
        case UPDATE_CARD_NUMBER:
            return { ...state, cardNumber: action.payload };
        case UPDATE_EXPIRATION_DATE:
            return { ...state, expirationDate: action.payload };
            case UPDATE_CVV:
            return { ...state, cvv: action.payload };
        default:
            return state;
    }
};

// Action creators
export const updateFirstName = (firstName) => ( {
    type: UPDATE_FIRST_NAME,
    payload: firstName,
});

export const updateLastName = (lastName) => ({
    type: UPDATE_LAST_NAME,
    payload: lastName,
});

export const updateLine1 = (line1) => ({
    type: UPDATE_LINE1,
    payload: line1,
});

export const updateCity = (city) => ({
    type: UPDATE_CITY,
    payload: city,
});

export const updateState = (state) => ({
    type: UPDATE_STATE,
    payload: state,
});

export const updateZipCode = (zipCode) => ({
    type: UPDATE_ZIP_CODE,
    payload: zipCode,
});

export const updateCountry = (country) => ({
    type: UPDATE_COUNTRY,
    payload: country,
});

export const updateMethod = (method) => ({
    type: UPDATE_METHOD,
    payload: method,
});

export const updateCardNumber = (cardNumber) => ({
    type: UPDATE_CARD_NUMBER,
    payload: cardNumber,
});

export const updateExpirationDate = (expirationDate) => ({
    type: UPDATE_EXPIRATION_DATE,
    payload: expirationDate,
});

export const updateCvv = (expirationDate) => ({
    type: UPDATE_CVV,
    payload: expirationDate,
});

export default paymentReducer;
