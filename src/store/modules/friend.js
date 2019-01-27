import {getMessage} from '@/api/message'


const friend = {
    state: {
        friendList: JSON.parse(sessionStorage.getItem('_friendList')) || [],
        messageList: JSON.parse(sessionStorage.getItem('_messageList')) || []
    },
    mutations: {
        SET_FRIEND_LIST(state, arr) {
            state.friendList = arr;
        },
        SET_MESSAGE_LIST(state, arr) {
            state.messageList = arr;
        }
    },
    actions: {
        GET_MESSAGE({commit}, userId) {
            getMessage(userId).then(res => {
                res = res.data.messageList;
                let messageList = [];
                var obj = {};
                res.forEach(item => {
                    if (item.toId == userId) {
                        obj[item.fromId] = []
                    } else if (item.fromId == userId) {
                        obj[item.toId] = [];
                    }
                })

                res.forEach(item => {
                    if (item.fromId in obj) {
                        obj[item.fromId].push({...item})
                    } else if (item.toId in obj) {
                        obj[item.toId].push({...item})
                    }
                })

                for (var key in obj) {
                    obj[key].sort(function (a, b) {
                        return a.createTime - b.createTime;
                    })
                    messageList.push(obj[key]);
                }
                commit('SET_MESSAGE_LIST', messageList);
                sessionStorage.setItem('_messageList', JSON.stringify(messageList))
                Promise.resolve(messageList)
            })
        }
    }
}
export default friend
