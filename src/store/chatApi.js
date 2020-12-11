import axios from 'axios'

export default ({
    namespaced: true,

    state: {
        conversationsList: [],
    },


    mutations: {
        setConversationIds(state, list) {
            state.conversationsList = list
        }
    },

    actions: {
        getConversationsIdsOfUser({commit, rootState}) {
            const param = {_id: rootState.userApi.user._id}
            axios.post('user/conversations', param)
                .then(response => {
                    commit('setConversationIds', response.data.listConversation)
                })
                // eslint-disable-next-line no-unused-vars
                .catch(err => {

                });
        }
    },

    getters : {
        getConvList: state => state.conversationsList
    }

})