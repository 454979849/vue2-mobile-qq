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
        {path: '/message', component: () => import('@/views/message/index'), name: 'Message'},
        {path: '/friend', component: () => import('@/views/friend/index'), name: 'Friend'},
        {path: '/dynamic', component: () => import('@/views/dynamic/index'), name: 'Dynamic'},
        {path:'/dialog/:toId',component:()=>import('@/views/dialog/index'),name:'Dialog'}
    ]
})