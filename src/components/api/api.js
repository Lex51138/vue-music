import {get} from './config'

const api = {
    rank:()=>{
       return  get('https://v1.itooi.cn/tencent/topList?id=26&pageSize=10&page=0');
    },
}


export  default api;
