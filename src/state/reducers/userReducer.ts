import { state } from '../actions/index';
import { action } from '../actions/index';

const initialState = {
    fullname: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
    country: '',
    bvn: ''
};

export const userReducer = (state: state = initialState, action: action) => {
    switch (action.type) {
        case 'UPDATE_USER':
            return { ...state, ...action.payload };
        case 'CLEAR_USER':
            return initialState;
        default:
            return state;
    }
};
