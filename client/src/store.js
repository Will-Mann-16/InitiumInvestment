import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

const middleware = applyMiddleware(thunk, createLogger());

export default createStore(reducers, middleware)