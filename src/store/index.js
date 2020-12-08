import Vue from 'vue'
import Vuex from 'vuex';
import userApi from './userApi'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        base_api_url: 'https://localhost:4040/api',
    },

    mutations: {
    },

    actions: {
    },

    modules: {
        userApi: userApi
    }

})