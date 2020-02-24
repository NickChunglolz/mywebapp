/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
// Pages
const Home = () => import('./components/Home.vue');
const About = () => import('./components/About.vue');
const Technique = () => import('./components/Tech.vue');
const Portfolio = () => import('./components/Portfolio.vue');


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
        {
            path:'/TECH',
            name: 'Technique',
            component: Technique
        },
        {
            path:'/PORT',
            name: 'Portfolio',
            component: Portfolio
        }
    ]
});