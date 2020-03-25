import axios from "axios";
import * as config from '../constants/index';

export default function callApi (endpoint, method, data){
    return axios({
        method: method,
        url : `${config.API_ENDPOINT}/${endpoint}`,
        data : data
    }).catch(err => {console.log(err)})
}