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
import '@/common/index.scss'
// vueg 转场动画
const options = {
    forwardAnim: 'fadeInRight',
    duration: 0.2
}
Vue.use(Vuex).use(Mint).use(vueg, router, options);

//自定义指令，v-number 只允许输入数字
Vue.directive('number', {
    bind(el, binding, vnode) {
        el.oninput = function () {
            var value = vnode.child.currentValue;
            var arr = value.split('');
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == 0) {
                    arr[i] = ''
                } else {
                    break;
                }
            }
            var str = arr.join('').replace(/[^0-9]/ig, '');
            vnode.child.currentValue = str;
        }
    }
})
//自定义指令，v-limit 限制输入长度。如 v-limit="{length:12}"，就是限制长度为12位
Vue.directive('limit', {
    bind(el, binding, vnode) {
        el.oninput = function () {
            var value = vnode.child.currentValue;
            var length = binding.value.length;
            if (value.length > 12) {
                vnode.child.currentValue = value.slice(0, length);
            }
        }
    }
})

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}

router.beforeEach((to, from, next) => {
    let userInfo = localStorage.getItem('_userInfo');
    if (userInfo || to.path == '/welcome' || to.path=='/login' || to.path=='/register') {
        next();
    } else {
        next('/welcome')
    }
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
