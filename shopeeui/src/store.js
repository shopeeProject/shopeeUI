// src/store.js
import { legacy_createStore as createStore } from 'redux';
import counterReducer from './reducers/reducer'; // We will create this in the next step

const store = createStore(counterReducer);
store.dispatch({ type: 'INCREMENT' });

export default store;
