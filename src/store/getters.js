const getters = {
    userInfo:state=>state.user.userInfo,
    footIndex:state=>state.app.footIndex,
    showFoot:state=>state.app.showFoot,
    showMask:state=>state.app.showMask,
    showUserPanel:state=>state.app.showUserPanel,
    messageList:state=>state.friend.messageList,
    friendList:state=>state.friend.friendList
}
export default getters
