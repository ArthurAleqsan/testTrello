import * as types from './../types';
import MainService from './../../services/MainService';

export function login() {

}
export function getTasks(query) {
    return (dispatch) => {
        MainService.getTasks(query)
            .then(res => {
                const { status, json } = res;
                if (MainService.isOkStatus(status)) {
                    dispatch({
                        type: types.SUCCESS_GET_TASKS,
                        tasks: json.message.tasks,
                    });
                }
            })
    }
}