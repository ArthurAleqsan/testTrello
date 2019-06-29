import * as types from '../types';

export function login() {
    return (dispatch) => {
        dispatch({
            type: types.LOGIN_TO_ADMIN,
        });
    }
}
