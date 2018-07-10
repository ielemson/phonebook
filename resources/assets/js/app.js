 
require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Vue.component('example-component', require('./components/ExampleComponent.vue'));
let Myheader = require('./components/Myheader.vue');
let Myfooter = require('./components/Myfooter.vue');
let Home = require('./components/Home.vue');
let About = require('./components/About.vue');
let ExampleComponent = require('./components/ExampleComponent.vue');

const routes = [
{ path: '/home', component: Home },
{ path: '/about', component: About },
{ path: '/example', component: ExampleComponent }

];

const router = new VueRouter({
routes
// mode:'history'
})
router.mode = 'html5'

const app = new Vue({
el: '#app',
router,
components:{Myheader,Myfooter}
});
