const user = {
    state: {
        userObj: {
            userId: localStorage.getItem('_userId') || undefined,
            userName: localStorage.getItem('_userName') || undefined
        }
    },
    mutations: {},
    actions: {}
}
export default user