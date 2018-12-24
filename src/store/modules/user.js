const user = {
    state: {
        userInfo: JSON.parse(localStorage.getItem('_userInfo')) || {}
    },
    mutations: {
        SET_USER_INFO(state,userInfo) {
            state.userInfo = userInfo;
        }
    },
    actions: {}
}
export default user