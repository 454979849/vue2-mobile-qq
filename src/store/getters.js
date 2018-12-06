const getters = {
    userId:state=>state.user.userObj.userId,
    footIndex:state=>state.app.footIndex,
    showFoot:state=>state.app.showFoot,
    showMask:state=>state.app.showMask,
    showUserPanel:state=>state.app.showUserPanel
}
export default getters