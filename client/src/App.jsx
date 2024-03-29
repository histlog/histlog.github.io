import React, { Fragment, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

//redux
import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import PrivateRoute from './components/routing/PrivateRoute';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import GlobalStyles from './assets/styles/globalstyles';
import './App.scss';
import './index.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const UIStyleComponent = React.lazy(() =>
    import('./components/UiStyleGuide/index')
);

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <GlobalStyles />

      <Router>
        <Fragment>
          <Navbar></Navbar>
          <Route exact path='/' render={(props) => <Landing {...props} />} />
          <section className='wrapper'>
            <Alert />
            <Switch>
            <Route 
                exact 
                path="/style-guide">
                <UIStyleComponent />
            </Route>
              <Route
                exact
                path='/register'
                render={(props) => <Register {...props} />}
              />
              <Route
                exact
                path='/login'
                render={(props) => <Login {...props} />}
              />
              <PrivateRoute
                exact
                path='/dashboard'
                component={Dashboard}
              />
              <PrivateRoute
                exact
                path='/create-profile'
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path='/edit-profile'
                component={EditProfile}
              />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
