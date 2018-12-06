const friend = {
    state: {
        friendList:JSON.parse(sessionStorage.getItem('friendList'))||[]
    },
    mutations: {
        SET_FRIEND_LIST(state,arr){
            state.friendList=arr;
        }
    },
    actions: {}
}
export default friend