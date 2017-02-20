import { createStore, combineReducers } from 'redux';
import { counterReducer } from './reducers/CounterReducer';

const rootReducer = combineReducers({ counterReducer });
export const store = createStore(rootReducer);