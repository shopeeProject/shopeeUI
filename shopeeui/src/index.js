import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    case "set":
      state.pop()
      return state  
    default:
      return state
  }
}
const store = createStore(todos, ['Use Redux'])
store.dispatch({
  type: '',
  text: 'Read the docs'
})
const store2 = createStore(todos,['abc'])

const stores = store
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(store.getState())
root.render(
  <React.StrictMode>
    {/* <Provider > */}
    <App {...[store,store2] }/>
    {/* </Provider>, */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
