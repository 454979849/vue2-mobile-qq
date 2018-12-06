import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import user from './modules/user'
import friend from './modules/friend'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        app,
        user,
        friend
    },
    getters
})

export default store