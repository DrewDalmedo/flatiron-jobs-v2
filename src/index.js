// standard 'create-react-app' imports
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// react router imports
import { BrowserRouter as Router, Route } from 'react-router-dom'

// redux imports
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
// reducers 
import jobsReducer from './reducers/jobsReducer'

// components / containers 
import Home from './components/Home'



const rootReducer = combineReducers({jobs: jobsReducer})
const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Route path="/" component={Home} />
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
