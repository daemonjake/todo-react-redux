import todos from './todos';
import filter from './filter';
import {combineReducers} from 'redux';

const todoReducers = combineReducers({
    todos,
    filter
});

export default todoReducers;
