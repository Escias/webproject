import Vue from 'vue'
import Vuex from 'vuex';
import userApi from './userApi'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
    },

    mutations: {
    },

    actions: {
    },

    modules: {
        userApi: userApi
    }

})