import * as types from './../types';
import MainService from './../../services/MainService';

export function getTasks(query) {
    return (dispatch) => {
        MainService.getTasks(query)
            .then(res => {
                const { status, json } = res;
                if (MainService.isOkStatus(status)) {
                    dispatch({
                        type: types.SUCCESS_GET_TASKS,
                        tasks: json.message.tasks,
                        taskTotalCount: json.message.total_task_count,
                    });
                }
            })
    }
}
export function createTask({username, email, text}) {
    return (dispatch) => {
        MainService.createTask({username, email, text})
    }
}