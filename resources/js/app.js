
require('./bootstrap');
window.Vue = require('vue');
import Vuex from 'vuex'
import storeVuex from './store/index'
import filter from './filter'
Vue.use(Vuex)

import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)

const store = new Vuex.Store(storeVuex)

Vue.component('main-app', require('./components/MainApp.vue').default);


const app = new Vue({
    el: '#app',
    store

});
