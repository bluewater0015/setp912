
import { ADDTSAK_CONTENT } from './types';

export function taskContent(taskContent) {
    return {
        type:ADDTSAK_CONTENT,
        taskContent
    }
}