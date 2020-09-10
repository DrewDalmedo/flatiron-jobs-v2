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
import userReducer from './reducers/userReducer'

// components / containers 
import Home from './components/Home/Home'
import JobsContainer from './containers/JobsContainer'
import ProfileContainer from './containers/ProfileContainer'
import Navigation from './components/Navbar/Navbar'
import Contact from './components/Contact/Contact'
import About from './components/About/About'

const rootReducer = combineReducers({job: jobsReducer, user: userReducer})
const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Router>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/jobs" component={JobsContainer} />
        <Route exact path="/profile" component={ProfileContainer} />
        <Route exact path="/contact" component={Contact} />
      </Router>
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
