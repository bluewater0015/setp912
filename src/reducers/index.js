
import { combineReducers } from 'redux';

import * as taskReducers from './taskReducers';

const rootReducer = combineReducers({
    ...taskReducers,
});
export default rootReducer;
