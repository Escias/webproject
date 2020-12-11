import Vue from 'vue'
import Vuex from 'vuex';
import userApi from './userApi'
import chatApi from './chatApi'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        currentProfilePage: '',
    },

    mutations: {
        setCurrentProfilePage(state, page) {
            state.currentProfilePage = page
        }
    },

    actions: {
    },

    modules: {
        userApi: userApi,
        chatApi: chatApi
    },
    plugins: [createPersistedState()]

})