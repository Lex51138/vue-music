import Vue from 'vue';
import Router from 'vue-router';
const Sort = ()=>import('@/components/ChildrenPage/Sort.vue');//排行榜
const Index = ()=>import('@/components/page/Index.vue');//首页

Vue.use(Router);
const routes = [
    {
        path:'/',
        name: 'index',
        component: Index,
    },
    {
        path: '/sort/:id',
        name: 'sort',
        component: Sort,
        meta: {
            keepAlive: true,
        }
    }
]
export default new Router({
    mode: 'history',
    routes
})