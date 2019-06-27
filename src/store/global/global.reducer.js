import * as types from './../types';

const initialState = {
    adminEmail: 'admin',
    pass: '123',
    isAdmin: false,
};

export default function globalReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}