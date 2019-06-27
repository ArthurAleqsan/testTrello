import * as types from './../types';

const initialState = {
    adminEmail: 'admin',
    pass: '123',
    isAdmin: false,
    tasks: []
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case types.SUCCESS_GET_TASKS: {
            return {
                ...state,
                tasks: action.tasks,
            }
        }
        
        default:
            return state
    }
}