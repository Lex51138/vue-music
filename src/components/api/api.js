import {get} from './config'
import jsonp from 'jsonp'

const api = {
    rank:(cb)=>{
        jsonp('/api/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=5381&uin=0&format=jsonp&jsonpCallback=callback&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1512554796112',
        {name:'callback'},
        (err,data)=>{
            cb(data.data.topList);
        });
    },
    hot:async ()=>{
        return get('https://v1.itooi.cn/tencent/songList/hot?cat=全部&pageSize=20&page=0')
    },
    search:async (data)=>{
        return get(`https://v1.itooi.cn/tencent/search?keyword=${data.keyword}&type=${data.type}&pageSize=5&page=0`)
    },
    songUrl:async (mid)=>{
        return get(`/api/base/fcgi-bin/fcg_music_express_mobile3.fcg?format=json205361747&platform=yqq&cid=205361747&songmid=${mid}&filename=C400${mid}.m4a&guid=126548448`)
    },
    rankD:(id,cb,vue)=>{
        jsonp(`/api/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=jsonp&jsonpCallback=callback&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=${id}&_=1512563984096`,
        {name:'callback'},
        (err,data)=>{
            cb(data.songlist,vue);
        });
    },
}
export  default api;
 