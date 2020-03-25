import { combineReducers } from 'redux';
import taskReducer from './tasks';

const myReducers = combineReducers({
    tasks : taskReducer
})

export default myReducers;
