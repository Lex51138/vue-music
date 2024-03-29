import axios from 'axios'
import qs from 'qs'
const config = {
    transformRequest: [
        function (data) {
            // let ret = '';
            // for (let it in data) {
            //     ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            // }
            // return ret
            return qs.stringify({...data});
        }
    ],
    transformResponse: [
        function (data) {
            return data
        }
    ],
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8;jsonp'
    },
    timeout: 10000,
    responseType: 'json',
}
export const get = (url)=>{
    return axios.get(url,config);
}
export const post = (url,data)=>{
    return axios.get(url,data,config);
}
