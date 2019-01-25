<template>
    <div class="message">
        <mHead pageType="message" placeholder="搜索"></mHead>
        <mt-loadmore class="messageListWrapper" :top-method="loadTop" ref="loadmore">
            <ul class="messageList">
                <li class="li" v-for="(item,index) in messageList" @click="openDialog(item)">
                    <div class="imgBox left">
                        <img :src="item[0].userHead">
                    </div>
                    <div class="detail right">
                        <span>{{item[0].nickName}}</span>
                        <p>{{item[item.length-1].content}}</p>
                    </div>
                </li>
            </ul>
        </mt-loadmore>
    </div>
</template>

<script>
    import {addClass} from '@/utils/common'
    import mHead from '@/components/head'
    import {Indicator, Search, Lazyload, Loadmore, Toast} from 'mint-ui';
    import Vue from 'vue'
    import {getMessage} from '@/api/message'
    import {mapGetters} from 'vuex'

    Vue.use(Lazyload);
    Vue.component(Loadmore.name, Loadmore);

    export default {
        name: "message",
        components: {mHead},
        computed: {
            ...mapGetters(['userInfo'])
        },
        created() {
            this.$store.commit('SHOW_FOOT_CHANGE', true);
            this.$store.commit('SET_FOOT_INDEX', 0);
            this.renderMessage();
        },
        methods: {
            loadTop() {
                this.renderMessage(()=>{
                    Toast({
                        message: '更新成功',
                        position: 'center',
                        duration: 1000
                    });
                    this.$refs.loadmore.onTopLoaded();
                })
            },
            renderMessage(callback){
                getMessage(this.userInfo.id).then(res => {
                    res = res.data.messageList;

                    var obj = {};
                    res.forEach(item => {
                        if (item.toId == this.userInfo.id) {
                            obj[item.fromId] = []
                        }else if (item.fromId==this.userInfo.id){
                            obj[item.toId]=[];
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
                        this.messageList.push(obj[key]);
                    }
                    this.$store.commit('SET_MESSAGE_LIST',this.messageList);
                    sessionStorage.setItem('_messageList',JSON.stringify(this.messageList))

                    if(callback){
                        callback();
                    }
                })
            },
            openDialog(arr){
                sessionStorage.setItem('_currentMessage',JSON.stringify(arr));
                this.$store.commit('SET_CURRENT_MESSAGE',arr);
                this.$router.push('/dialog')
            }
        },
        data() {
            return {
                popupVisible: true,
                searchWords: '',
                messageList: []
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../../common/mixin';


    .message {
        width: 100%;
        height: 100%;
    }


    .messageListWrapper {
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        position: absolute;
        left: 0;
        right: 0;
        top: .6rem;
        bottom: .54rem;

        ul.messageList {
            width: 100%;

            li {
                height: .64rem;

                .imgBox {
                    width: 18%;
                    height: 100%;
                    @include flex-center();

                    img {
                        height: .4rem;
                        border-radius: 50%;
                    }
                }

                .detail {
                    width: 82%;
                    height: 100%;
                    border-bottom: .01rem solid #eee;
                    display: flex;
                    flex-direction: column;
                    padding-top: .1rem;
                    padding-bottom: .12rem;
                    justify-content: space-around;

                    span {
                        font-size: .16rem;
                    }

                    p {
                        color: #666;
                        font-size: .13rem;
                    }
                }
            }
        }
    }
</style>
