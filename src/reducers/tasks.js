import * as Types from '../constants/actionType';

const initialState = {
    tasks : []
};

const taskReducer = (state = initialState, action) => {
    switch (action.type){
        case Types.FETCH_TASK_SUCCES:
            const tasks = action.payload.data;
            return {
                ...state,
                tasks : tasks, 
            }
        default:
            return state;
    };
};

export default taskReducer;