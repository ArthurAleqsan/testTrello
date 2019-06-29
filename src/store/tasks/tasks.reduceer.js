import * as types from './../types';

const initialState = {
    tasks: [],
    taskTotalCount: '',
    query: {
        sort_field: '',
        sort_direction: '',
        page: 1,
    }
};

export default function taskReducer(state = initialState, action) {
    switch (action.type) {
        case types.SUCCESS_GET_TASKS: {
            return {
                ...state,
                tasks: action.tasks,
                taskTotalCount: action.taskTotalCount,
            }
        }
        case types.SUCCESS_CREATE_TASK: {
            return {
                ...state,
                tasks: action.tasks,
                taskTotalCount: action.taskTotalCount,
            }
        }
        case types.SET_QUERY:
            return {
                ...state,
                query: action.query,
            }
        case types.SUCCESS_EDIT_TASK:
            return {
                ...state,
                tasks: action.newTasks
            }

        default:
            return state
    }
}