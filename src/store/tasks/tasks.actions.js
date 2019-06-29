import * as types from './../types';
import MainService from './../../services/MainService';
import { updateInArray } from './../../util/helpers';

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
    return (dispatch, getState) => {
        MainService.editTask(id, task)
            .then(res => {
                const { status, json } = res;
                if (MainService.isOkStatus(status) && json.status === 'ok') {
                    const { tasks } = getState().tasks;
                    const { text, status } = task;

                    let newTasks = [...tasks];
                    const index = tasks.findIndex(task => task.id === id);
                    const editedTask = {...tasks[index], text, status}
                    newTasks = updateInArray(newTasks,
                        task => task.id === id,
                        () => editedTask
                    );

                    dispatch({
                        type: types.SUCCESS_EDIT_TASK,
                        newTasks
                    });
                }
            });
    }
}