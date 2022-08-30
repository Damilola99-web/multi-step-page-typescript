import { Dispatch } from 'redux';
import { action } from '../actions/index';
export const updateUser = (user: object) => {
    return (dispatch: Dispatch<action>) => {
        dispatch({
            type: 'UPDATE_USER',
            payload: user
        });
    };
};
export const clearUser = () => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'CLEAR_USER'
        });
    };
};
