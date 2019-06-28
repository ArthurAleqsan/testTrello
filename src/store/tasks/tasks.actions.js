import * as types from './../types';
import MainService from './../../services/MainService';

export function getTasks(query) {
    return (dispatch) => {
        MainService.getTasks(query)
            .then(tasks => {
                const { status, json } = tasks;
                if (MainService.isOkStatus(status) && json.status === 'ok') {
                    dispatch({
                        type: types.SUCCESS_GET_TASKS,
                        tasks: json.message.tasks,
                        taskTotalCount: json.message.total_task_count,
                    });
                }
            })
    }
}
export function createTask({ username, email, text }) {
    return (dispatch, getState) => {
        MainService.createTask({ username, email, text })
            .then(task => {
                const { status, json } = task;
                if (MainService.isOkStatus(status) && json.status === 'ok') {
                    const { tasks, taskTotalCount } = getState().tasks;
                    dispatch({
                        type: types.SUCCESS_CREATE_TASK,
                        tasks: [json.message, ...tasks],
                        taskTotalCount: +taskTotalCount + 1,
                    });
                }
            })
    }
}
export function setQuery(query) {
    return (dispatch) => {
        dispatch({
            type: types.SET_QUERY,
            query,
        });
    }
}
export function editTask(id, task) {
    return (dispatch) => {
        MainService.editTask(id, task)
    }
}