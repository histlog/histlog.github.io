import { createStore, applyMiddleware } from 'redux/middleware';
import { composeWithDevTools } from 'redux-devtools-extensions';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
