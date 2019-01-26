const friend = {
    state: {
        friendList: JSON.parse(sessionStorage.getItem('_friendList')) || [],
        messageList: JSON.parse(sessionStorage.getItem('_messageList')) || []
    },
    mutations: {
        SET_FRIEND_LIST(state, arr) {
            state.friendList = arr;
        },
        SET_MESSAGE_LIST(state,arr){
            state.messageList=arr;
        }
    },
    actions: {}
}
export default friend
