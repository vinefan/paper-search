import Vue from 'vue'
import Router from 'vue-router';
import Search from '../components/Search'
import Index from '../App'

Vue.use(Router);
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/search',
            name: 'search',
            component: Search,
            props: (route) => ({ query: route.query.msg })
        }
    ]
})