const app = {
    state: {
        showFoot: false,
        footIndex: sessionStorage.getItem('footIndex') || 0,
        showMask:false,
        showUserPanel:false
    },
    mutations: {
        SHOW_FOOT_CHANGE(state, bool) {
            state.showFoot = bool;
        },
        SET_FOOT_INDEX(state,index){
            state.footIndex=index;
        },
        SET_MASK(state,bool){
            state.showMask=bool;
        },
        SET_USER_PANEL(state,bool){
            state.showUserPanel=bool
        }
    },
    actions: {}
}
export default app