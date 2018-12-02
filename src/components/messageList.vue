<template>
    <mt-loadmore class="messageListWrapper" id="container" :top-method="loadTop" ref="loadmore">
        <ul class="messageList">
            <li v-for="(item,index) in messageList">
                <div class="imgBox left">
                    <img v-lazy.container="item.imgSrc" alt="">
                </div>
                <div class="detail right">
                    <span>{{item.nickName}}</span>
                    <p>{{item.lastSay}}</p>
                </div>
            </li>
        </ul>
    </mt-loadmore>
</template>

<script>
    import Vue from 'vue'
    import {Lazyload, Loadmore, Toast} from 'mint-ui';

    Vue.use(Lazyload);
    Vue.component(Loadmore.name, Loadmore);

    export default {
        name: "messageList",
        methods: {
            loadTop() {
                //定时器模拟异步请求效果
                setTimeout(() => {
                    Toast({
                        message: '更新成功',
                        position: 'center',
                        duration: 1000
                    });
                    this.$refs.loadmore.onTopLoaded();
                }, 1000)
            }
        },
        mounted() {

        },
        props:['messageList'],
        data() {
            return {
                popupVisible: true
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../common/mixin';

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
                &:first-child {
                    background-color: #f0f1f3;
                }
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