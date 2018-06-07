import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import throttle from 'lodash/throttle';

const middleware = [ thunk ];

const store = createStore(
    rootReducer, 
    applyMiddleware(...middleware)
);

export default store;