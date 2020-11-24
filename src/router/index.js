import Vue from 'vue';
import Router from 'vue-router';
import NotFind from '../views/404'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes:[
        {path: '*' ,name: '/NotFind', component: NotFind},
        {path: '/' ,redirect: '/index'},
        {path: '/login' ,name: '/login', component: ()=>import('../views/Login')},
        {path: '/register' ,name: '/register', component: ()=>import('../views/Register')},
        {path: '/index' ,name: '/index', component: ()=>import('../views/Index')}
    ]

})

export default  router