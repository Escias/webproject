import axios from 'axios'

export default ({
    namespaced: true,

    state: {
        status: '',
        token: localStorage.getItem('token') || 'toto',
        user : {}
    },


    mutations: {
        auth_request(state){
            state.status = 'loading'
        },
        auth_success(state, token, user){
            state.status = 'success'
            state.token = token
            state.user = user
        },
        auth_error(state){
            state.status = 'error'
        },
        logout(state){
            state.status = ''
            state.token = ''
        },
        reloadStorage(state) {
            state.token = localStorage.getItem('token') || '';
        }
    },

    actions: {
        register({commit}, user){
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios.post('register', user)
                    .then(resp => {
                        const token = resp.data.token
                        const user = resp.data.user
                        localStorage.setItem('token', token)
                        axios.defaults.headers.common['Authorization'] = token
                        commit('auth_success', token, user)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error', err)
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        login({commit}, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request');
                axios.post('login', user)
                    .then(response => {
                        const token = response.data.token;
                        const user = response.data.user
                        localStorage.setItem('token', token);
                        axios.defaults.headers.common['Authorization'] = token
                        commit('auth_success', token, user);
                        resolve(response);
                    })
                    .catch(err => {
                        commit('auth_error');
                        localStorage.removeItem('token');
                        reject(err);
                    });
            });
        },

        logout({commit}){
            // eslint-disable-next-line no-unused-vars
            return new Promise((resolve, reject) => {
                commit('logout')
                localStorage.removeItem('token')
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        }
    },

    getters : {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
    }

})