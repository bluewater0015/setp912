
import { TYPES } from '../actions/index';

const TASK_STATE = {
    taskContent:''
};
export function taskStore(state = TASK_STATE,action) {
    switch (action.type){
        case TYPES.ADDTSAK_CONTENT:
            return {
                taskContent:action.taskContent
            };
        default:
            return state
    }
}