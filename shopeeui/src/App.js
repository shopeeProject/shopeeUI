import logo from './logo.svg';
import './App.css';
import SignIn from './sign-in/SignIn';
import React from 'react'
import Checkout from './checkout/Checkout';
import { useSelector, useDispatch } from 'react-redux';

function App(store) {
  console.log(store.getState());
  // const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      {/* <header className="App-header">
       header
      </header> */}
       <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
       <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      {/* <Checkout/> */}
      {/* <input:value=count> */}
      <footer>footer</footer>
    </div>
  );
}

export default App;
