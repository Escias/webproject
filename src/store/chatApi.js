import axios from 'axios'

export default ({
    namespaced: true,

    state: {
        conversationsList: [],
        chatMessages: [],
        lastConvInit: '',
    },


    mutations: {
        setConversationIds(state, list) {
            state.conversationsList = list
        },

        setChatMessages(state, list) {
            state.chatMessages = list
        },

        setLastConvo(state, obj) {
            state.lastConvInit = obj
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
        },

        initConversation({commit, rootState}, userToId) {
            const query = {user1: rootState.userApi.user._id, user2: userToId}
            axios.post('conversation', query)
                .then(response => {
                    commit('setLastConvo', response.data.idConv)
                })
        }
    },

    getters : {
        getConvList: state => state.conversationsList,
        getMessageList: state => state.chatMessages,
        getLastConv: state => state.lastConvInit
    }

})