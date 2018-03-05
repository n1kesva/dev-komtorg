
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
// window.VueRouter = require('vue-router');

// Vue.use(VueRouter);

//import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('layout-main', require('./components/layouts/notAuth/LayoutMain.vue'));
Vue.component('layout-aboutus', require('./components/layouts/notAuth/LayoutAboutus.vue'));
Vue.component('layout-cart', require('./components/layouts/notAuth/LayoutCart.vue'));
Vue.component('layout-contacts', require('./components/layouts/notAuth/LayoutContacts.vue'));
Vue.component('layout-productcategories', require('./components/layouts/notAuth/LayoutProductcategories.vue'));
Vue.component('layout-productlist', require('./components/layouts/notAuth/LayoutProductlist.vue'));

Vue.component('register-form', require('./components/auth/RegisterForm.vue'));
Vue.component('login-form', require('./components/auth/LoginForm.vue'));
Vue.component('send-password', require('./components/auth/SendPassword.vue'));

Vue.component('right-drawer', require('./components/layouts/RightDrawer.vue'));
Vue.component('left-drawer', require('./components/layouts/LeftDrawer.vue'));

Vue.component('check-box', require('./components/auth/CheckBox.vue'));


import { routes } from './routes';

const router = new VueRouter({
	mode: 'history',
    routes
});

const app = new Vue({
    el: '#app',
    router
});


