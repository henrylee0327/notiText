import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'

function reducer (state, action) {
  if (action.type === 'changeState') {
    return action.payload.newState
  }
  return 'state'
}


const store = createStore(reducer)

console.log(store.getState())

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

