import axios from 'axios'

export default ({
    namespaced: true,

    state: {
        conversationsList: [],
        chatMessages: [],
    },


    mutations: {
        setConversationIds(state, list) {
            state.conversationsList = list
        },

        setChatMessages(state, list) {
            state.chatMessages = list
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
        },

        getMessagesOfConversation({commit}, param) {
            axios.get('conversation/' + param + '/message')
                .then(response => {
                    commit('setChatMessages', response.data.messages)
                })
        },

        sendMessage({dispatch}, params) {
            const query = {userFromId: params.idUser, content: params.message}
            axios.post('conversation/' + params.url + '/message', query)
                .then( function () {
                    dispatch('getMessagesOfConversation', params.url)
                })
        }
    },

    getters : {
        getConvList: state => state.conversationsList,
        getMessageList: state=> state.chatMessages
    }

})