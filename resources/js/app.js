require('./bootstrap');

global.$ = global.jQuery = require('jquery');
global.jQuery = global.jQuery = require('jquery');
require('../assets/js/lightslider.min');

window.Vue = require('vue');

Vue.component('home', require('./views/Home.vue').default)
Vue.component('Spinner', require('./components/spinner.vue').default)

import router from './router'

const app = new Vue({
    el: '#app',
    router
});