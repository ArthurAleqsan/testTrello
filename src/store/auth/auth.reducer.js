import * as types from '../types';

const initialState = {
    adminEmail: 'admin',
    pass: '123',
    isAdmin: false,
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_TO_ADMIN:
            return {
                ...state,
                isAdmin: true,
            }
        default:
            return state
    }
}