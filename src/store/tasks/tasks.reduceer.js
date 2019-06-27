import * as types from './../types';

const initialState = {
    tasks: [],
    taskTotalCount: '',
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
        
        default:
            return state
    }
}