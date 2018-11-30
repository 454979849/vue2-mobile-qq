import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import vueg from 'vueg'
import 'vueg/css/transition-min.css'
import '@/utils/hide-address'
import '@/common/base.scss'
Vue.use(Vuex)
// vueg 转场动画
const options = {
    forwardAnim: 'fadeInRight',
    duration:0.2
}
Vue.use(vueg, router, options)
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
Vue.use(Mint);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
