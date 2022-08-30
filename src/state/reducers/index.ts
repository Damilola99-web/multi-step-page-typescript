import { combineReducers } from 'redux';
import { userReducer } from './userReducer';

export const reducers = combineReducers({
    user: userReducer
});

export type State = ReturnType<typeof reducers>;
