const getters = {
    userInfo:state=>state.user.userInfo,
    footIndex:state=>state.app.footIndex,
    showFoot:state=>state.app.showFoot,
    showMask:state=>state.app.showMask,
    showUserPanel:state=>state.app.showUserPanel,
    currentMessage:state=>state.friend.currentMessage
}
export default getters
