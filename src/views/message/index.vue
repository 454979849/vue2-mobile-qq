<template>
    <div class="message">
        <mHead></mHead>
        <mt-loadmore class="messageListWrapper" :top-method="loadTop" ref="loadmore">
            <ul class="messageList">
                <li class="li" v-for="(item,index) in messageList" @click="openDialog(item)">
                    <div class="imgBox left">
                        <img :src="item[0].userHead">
                    </div>
                    <div class="detail right">
                        <span>{{item[0].nickName}}</span>
                        <p>{{item[item.length-1].content}}</p>
                        <div class="unReadNum" v-show="getUnReadNum(item)>0">
                            {{getUnReadNum(item)}}
                        </div>
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
            ...mapGetters(['userInfo', 'messageList'])
        },
        created() {
            this.$store.commit('SHOW_FOOT_CHANGE', true);
            this.$store.commit('SET_FOOT_INDEX', 0);
            this.renderMessage();
        },
        methods: {
            loadTop() {
                this.renderMessage(() => {
                    Toast({
                        message: '更新成功',
                        position: 'center',
                        duration: 1000
                    });
                    this.$refs.loadmore.onTopLoaded();
                })
            },
            async renderMessage(callback) {
                await this.$store.dispatch('GET_MESSAGE', this.userInfo.id);
                if (callback) {
                    callback();
                }
            },
            openDialog(arr) {
                let toId = arr[0].fromId == this.userInfo.id ? arr[0].toId : arr[0].fromId;
                this.$router.push(`/dialog/${toId}`)
            },
            getUnReadNum(item) {
                return item.filter(v => {
                    return v.toId == this.userInfo.id && v.isRead == 0;
                }).length;
            }
        },
        data() {
            return {
                popupVisible: true,
                searchWords: ''
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
                    position: relative;

                    span {
                        font-size: .16rem;
                    }

                    p {
                        color: #666;
                        font-size: .13rem;
                    }

                    .unReadNum {
                        position: absolute;
                        right: .15rem;
                        width: .24rem;
                        height: .24rem;
                        line-height: .24rem;
                        text-align: center;
                        font-size: .14rem;
                        border-radius: 50%;
                        color: #fff;
                        background: red;
                    }
                }
            }
        }
    }
</style>
