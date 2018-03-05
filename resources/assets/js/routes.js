import LayoutMain from './components/layouts/notAuth/LayoutMain.vue';
import LayoutCart from './components/layouts/notAuth/LayoutCart.vue';
import LayoutContacts from './components/layouts/notAuth/LayoutContacts.vue';
import LayoutProductcategories from './components/layouts/notAuth/LayoutProductcategories.vue';
import LayoutAboutus from './components/layouts/notAuth/LayoutAboutus.vue';

export const routes = [
    { path: '/', component: LayoutMain },
    { path: '/cart', name: 'cart', component: LayoutCart },
    { path: '/contacts', component: LayoutContacts },
    { path: '/product-categories', component: LayoutProductcategories },
    { path: '/about-us', component: LayoutAboutus },

   
];