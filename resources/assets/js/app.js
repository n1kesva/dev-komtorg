
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

// const c = {
// 	template: 'check check 1 2 3'
// };

// var router = new VueRouter({
//     routes: [
//         // { path: '/', component: layout-main },
//         { path: '/cart', component: c },
//         { path: '/contacts', component: 'layout-contacts' }
//     ]
// });

const app = new Vue({
    el: '#app'
    // router: router
});


