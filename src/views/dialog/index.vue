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
            <input v-model="msg" @keydown.enter="sendMessage">
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {sendMessage} from '@/api/dialog.js'
    import {Toast} from 'mint-ui'

    export default {
        name: "currentDialog",
        computed: {
            ...mapGetters(['userInfo', 'messageList','friendList']),
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
            this.currentNickName=this.friendList.find(item=>{
                return item.idB==this.$route.params.toId;
            }).nickName;
        },
        mounted() {
            this.$refs.dialogWrap.scrollTop = 100000000 + 'px'
        },
        methods: {
            sendMessage() {
                if (this.msg.length == 0) {
                    Toast({
                        message: '请输入消息',
                        position: 'center',
                        duration: 1000
                    });
                } else {
                    let createTime = new Date().getTime();
                    sendMessage(this.msg, this.userInfo.id, Number(this.$route.params.toId), createTime, 0).then(res => {
                        console.log(res);
                    })
                }
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
            height: .6rem;
            display: flex;
            justify-content: center;
            align-items: center;

            input {
                width: 94%;
                height: .44rem;
                border-radius: .08rem;
                border: none;
                outline: none;
                font-size: .17rem;
                padding-left: .08rem;
            }
        }

        .dialogWrap {
            height: calc(100% - 1.2rem);

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
            background: rgba(255, 255, 255, .2);
            text-align: center;
            position: relative;

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
