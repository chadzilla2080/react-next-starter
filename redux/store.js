import { createStore, combineReducers } from 'redux';
import { counterReducer } from './reducers/counterReducer/counterReducer';

const rootReducer = combineReducers({ counterReducer });
export const store = createStore(rootReducer);