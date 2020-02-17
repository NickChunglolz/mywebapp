/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
// Pages
import Home from '@/components/Home';
import About from '@/components/About'

Vue.use(Router);

export default new Router ({
    routes: [
        {
            path:'/',
            name:'Home',
            component: Home
        },
        {
            path:'/ABOUT',
            name:'About',
            component: About
        },
    ]
});