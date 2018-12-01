const app = {
    state: {
        showFoot: false,
        footIndex: sessionStorage.getItem('footIndex') || 0
    },
    mutations: {
        SHOW_FOOT_CHANGE(state, bool) {
            state.showFoot = bool;
        },
        SET_FOOT_INDEX(state,index){
            state.footIndex=index
        }
    },
    actions: {}
}
export default app