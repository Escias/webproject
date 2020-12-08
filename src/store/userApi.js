import axios from 'axios'

export default ({
    namespaced: true,

    state: {
        api_url: 'http://localhost:4040/api/user/',
        //api_url: .rootState.base_api_url + '/user',
        currentUser: {},
    },

    mutations: {
        setUser(state, user) {
            state.currentUser = user;
        }
    },

    actions: {
        getUserByMail({commit, state}, userMail) {
            axios.get(state.api_url + 'mail/' + userMail)
                .then(response => commit('setUser', response))
        },
        createUser({state}, queryParams) {
            axios.post(state.api_url, queryParams)
                .then(response => console.log(response))
        }
    },

    getters: {
    }

})