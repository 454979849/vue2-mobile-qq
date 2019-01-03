const friend = {
    state: {
        friendList: JSON.parse(sessionStorage.getItem('_friendList')) || [],
        messageList: JSON.parse(sessionStorage.getItem('_messageList')) || [],
        currentMessage:JSON.parse(sessionStorage.getItem('_currentMessage'))||[]
    },
    mutations: {
        SET_FRIEND_LIST(state, arr) {
            state.friendList = arr;
        },
        SET_MESSAGE_LIST(state,arr){
            state.messageList=arr;
        },
        SET_CURRENT_MESSAGE(state,arr){
            state.currentMessage=arr;
        }
    },
    actions: {}
}
export default friend