import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({y: 0}),
    routes: [
        {path: '/', redirect: '/welcome'},
        {path: '/welcome', component: () => import('@/views/welcome/index'), name: 'Welcome'},
        {path: '/login', component: () => import('@/views/login/index'), name: 'Login'},
        {path: '/register', component: () => import('@/views/register/index'), name: 'Register'},
        {path: '/message/:userId', component: () => import('@/views/message/index'), name: 'Message'},
        {path: '/friend/:userId', component: () => import('@/views/friend/index'), name: 'Friend'},
        {path: '/dynamic/:userId', component: () => import('@/views/dynamic/index'), name: 'Dynamic'},
    ]
})