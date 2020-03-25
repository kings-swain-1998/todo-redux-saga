import callApi from '../apiCaller/index';
import * as Types from '../constants/actionType';

export const fetchTaskRq = () => {
    return dispatch => {
        callApi('task', 'GET', null).then(res => {
            dispatch(fetchTask(res.data))
        })
    }
};
export const fetchTask = (data) => {
    return {
        type : Types.FETCH_TASK_SUCCES,
        payload : {
            data : data
        }
    }
}