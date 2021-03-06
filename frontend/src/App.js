import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';

function App() {
  return (
    <Provider store={store}>
      <Router>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
      </Router>
    </Provider>
  );
}

export default App;
