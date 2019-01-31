<template>
    <div class="dialog">
        <div class="currentFriend">
            <i class="fa fa-angle-left" @click="$router.back()"></i>
            <span>{{currentNickName}}</span>
        </div>
        <div class="dialogWrap" ref="dialogWrap">
            <ul>
                <li v-for="(item,index) in currentMessage" :key="index" class="mItem">
                    <div class="left" v-if="item.fromId!=userInfo.id">
                        <img :src="item.userHead">
                        <div class="content" style="margin-left:.1rem;">
                            {{item.content}}
                        </div>
                    </div>
                    <div class="right" v-if="item.fromId==userInfo.id">
                        <div class="content" style="margin-right:.1rem;">
                            {{item.content}}
                        </div>
                        <img :src="$store.state.user.userInfo.userHead">
                    </div>
                </li>
            </ul>
        </div>
        <div class="writeArea">
            <input type="text" placeholder="请输入消息，回车发送" v-model="msg" @keydown.enter="sendMessage">
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {sendMessage, setIsRead} from '@/api/dialog.js'
    import {getMessage} from '@/api/message.js'
    import {Toast,MessageBox} from 'mint-ui'

    export default {
        name: "currentDialog",
        computed: {
            ...mapGetters(['userInfo', 'messageList', 'friendList']),
            currentMessage() {
                let id = this.$route.params.toId;
                let num = 0, msg = [];
                this.messageList.forEach(item => {
                    if (item.some(function (v) {
                        return v.fromId == id || v.toId == id;
                    })) {
                        num++;
                        msg = item;
                        return;
                    }
                })
                return msg;
            }
        },
        data() {
            return {
                currentNickName: '',
                msg: ''
            }
        },
        created() {
            this.$store.commit('SHOW_FOOT_CHANGE', false);
            if (this.currentMessage.length) {
                this.currentNickName = this.currentMessage[0].nickName;
            } else {
                this.currentNickName = this.friendList.find(item => {
                    return item.idB == this.$route.params.toId;
                }).nickName;
            }
            setIsRead(this.userInfo.id, this.$route.params.toId).then(res => {
                res = res.data;
                if(res.code=='200'){
                    console.log('消息已读')
                }
            })
        },
        mounted() {
            this.$refs.dialogWrap.scrollTo(0,100000);
            socket.on('msgComming',()=>{
                setIsRead(this.userInfo.id, this.$route.params.toId).then(res => {
                    res = res.data;
                    if(res.code=='200'){
                        console.log('消息已读')
                    }
                })
            })
        },
        methods: {
            async sendMessage() {
                if (this.msg.length == 0) {
                    Toast({
                        message: '请输入消息',
                        position: 'center',
                        duration: 1000
                    });
                } else {
                    let createTime = new Date().getTime();
                    console.log(this.msg, this.userInfo.id, Number(this.$route.params.toId), createTime, 0);
                    let res = await sendMessage(this.msg, this.userInfo.id, Number(this.$route.params.toId), createTime, 0)
                    res = res.data;
                    if (res.code == '200') {
                        this.msg = '';
                        this.renderMessage();
                        socket.emit('sendMessage', this.$route.params.toId);
                    }else{
                        MessageBox.alert('发送消息失败，请检查网络!', '提示');
                    }
                }
            },
            renderMessage() {
                this.$store.dispatch('GET_MESSAGE', this.userInfo.id)
            },
        },
        watch:{
            messageList(){
                this.$nextTick(()=>{
                    this.$refs.dialogWrap.scrollTo(0,100000)
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../common/mixin.scss";

    .dialog {
        width: 100%;
        height: 100%;
        background: #ecedf0;

        div.writeArea {
            position:fixed;
            z-index:500;
            bottom:0;
            left:0;
            right:0;
            height: .6rem;
            display: flex;
            justify-content: center;
            align-items: center;
            -webkit-user-select:text !important;
            input {
                width: 100%;
                height: .44rem;
                border: none;
                outline: none;
                font-size: .17rem;
                padding-left: .08rem;
                -webkit-user-select:text !important;
            }
        }

        .dialogWrap {
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
            width:100%;
            position: fixed;
            left: 0;
            right: 0;
            top: .6rem;
            height:calc(100% - 1.2rem);
            z-index:200;
            & > ul {
                padding: 0 0.1rem;

                li {
                    height: .7rem;

                    & > div {
                        line-height: .4rem;
                        margin-top: .15rem;
                        display: flex;
                        width: calc(100% - 1rem);
                        align-items: center;

                        & > img {
                            height: .4rem;
                            border-radius: .2rem;
                        }

                        & > .content {
                            max-width: calc(100% - 0.5rem);
                            background: #fff;
                            border-radius: 0.14rem;
                            padding: 0 0.1rem;
                        }

                        &.right {
                            .content {
                                background: lightskyblue;
                            }

                            justify-content: flex-end;
                        }
                    }
                }
            }

        }

        .currentFriend {
            height: .6rem;
            background: #fefefe;
            text-align: center;
            position: fixed;
            top:0;
            left:0;
            width:100%;
            z-index:500;
            i {
                @include extend-click();
                font-size: .34rem;
                position: absolute;
                left: .12rem;;
                top: .13rem;
            }

            span {
                font-size: .19rem;
                line-height: .6rem;
            }
        }
    }
</style>
