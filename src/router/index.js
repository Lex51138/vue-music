import Vue from 'vue';
import Router from 'vue-router';
import Sort from '../components/ChildrenPage/Sort.vue'
import Index from '../components/page/Index.vue'

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