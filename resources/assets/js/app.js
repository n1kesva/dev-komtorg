
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


Vue.component('register-component', require('./components/RegisterComponent.vue'));
Vue.component('login-component', require('./components/LoginComponent.vue'));
Vue.component('layout-component', require('./component/layouts/notAuth/LayoutNotAuth.vue'));
Vue.component('register-invation', require('./component/layouts/notAuth/RegisterInvation.vue'));
Vue.component('main-poster', require('./component/layouts/MainPoster.vue'));
Vue.component('right-drawer', require('./component/layouts/RightDrawer.vue'));
Vue.component('left-drawer', require('./component/layouts/LeftDrawer.vue'));
Vue.component('cards-component', require('./components/CardsComponent.vue'));



const app = new Vue({
    el: '#app'
});



