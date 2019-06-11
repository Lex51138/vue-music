import {get} from './config'

const api = {
    rank:async ()=>{
       return  get('https://v1.itooi.cn/tencent/topList?id=26&pageSize=10&page=0');
    },
    hot:async ()=>{
        return get('https://v1.itooi.cn/tencent/songList/hot?cat=全部&pageSize=20&page=0')
    },
    search:async (data)=>{
        return get(`https://v1.itooi.cn/tencent/search?keyword=${data.keyword}&type=${data.type}&pageSize=5&page=0`)
    }
}


export  default api;
 