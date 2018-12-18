<template>
    <div class="message">
        <mHead pageType="message" placeholder="搜索"></mHead>
        <mt-loadmore class="messageListWrapper" :top-method="loadTop" ref="loadmore">
            <ul class="messageList">
                <li class="li" v-for="(item,index) in messageList">
                    <div class="imgBox left">
                        <img :src="item.imgSrc">
                    </div>
                    <div class="detail right">
                        <span>{{item.nickName}}</span>
                        <p>{{item.lastSay}}</p>
                    </div>
                </li>
            </ul>
        </mt-loadmore>
    </div>
</template>

<script>
    import {addClass} from '@/utils/common'
    import mHead from '@/components/head'
    import {Indicator, Search,Lazyload, Loadmore, Toast} from 'mint-ui';
    import Vue from 'vue'

    Vue.use(Lazyload);
    Vue.component(Loadmore.name, Loadmore);

    export default {
        name: "message",
        components:{mHead},
        created() {
            this.$store.commit('SHOW_FOOT_CHANGE', true);
            this.$store.commit('SET_FOOT_INDEX', 0);
        },
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
        data() {
            return {
                popupVisible: true,
                searchWords: '',
                messageList: [{
                    imgSrc: 'http://120.79.192.193/assets/headImgs/2.jpg',
                    nickName: '武汉慧擎科技',
                    lastSay: '210数据库已扩容完成，可以使用了'
                }, {
                    imgSrc: 'http://120.79.192.193/assets/headImgs/3.jpg',
                    nickName: '狗子',
                    lastSay: '请你吃鸡蛋'
                }, {
                    imgSrc: 'http://120.79.192.193/assets/headImgs/4.jpg',
                    nickName: '猫子',
                    lastSay: '我先把你拉进群里，12月10日左右对接'
                }, {
                    imgSrc: 'http://120.79.192.193/assets/headImgs/5.jpg',
                    nickName: '兔子',
                    lastSay: '你个傻逼玩手游？'
                }, {
                    imgSrc: 'http://120.79.192.193/assets/headImgs/6.jpg',
                    nickName: '鸡子',
                    lastSay: '嗯'

                }, {
                    imgSrc: 'http://120.79.192.193/assets/headImgs/7.jpg',
                    nickName: '鸭子',
                    lastSay: '然后其他时间  把服务器玩熟了'

                }, {
                    imgSrc: 'http://120.79.192.193/assets/headImgs/8.jpg',
                    nickName: '败子',
                    lastSay: '宝安智创高地'

                }, {
                    imgSrc: 'http://120.79.192.193/assets/headImgs/9.jpg',
                    nickName: '傻子',
                    lastSay: '估计有人下小电影'

                }, {
                    imgSrc: 'http://120.79.192.193/assets/headImgs/10.jpg',
                    nickName: '哈子',
                    lastSay: '缩写'

                }, {
                    imgSrc: 'http://120.79.192.193/assets/headImgs/11.jpg',
                    nickName: '猪子',
                    lastSay: '有一栋大厦是的'

                }, {
                    imgSrc: 'http://120.79.192.193/assets/headImgs/12.jpg',
                    nickName: '牛子',
                    lastSay: '现在过来'

                }, {
                    imgSrc: 'http://120.79.192.193/assets/headImgs/13.jpg',
                    nickName: '羊子',
                    lastSay: '这个页面里的格子  可以拖拽排序'

                }, {
                    imgSrc: 'http://120.79.192.193/assets/headImgs/14.jpg',
                    nickName: '狮子',
                    lastSay: '额，找到一个有效的了'

                }, {
                    imgSrc: 'http://120.79.192.193/assets/headImgs/15.jpg',
                    nickName: '虎子',
                    lastSay: '是啊 估计又发不了'

                }, {
                    imgSrc: 'http://120.79.192.193/assets/headImgs/16.jpg',
                    nickName: '狼子',
                    lastSay: '嗯嗯嗯嗯，老婆最重要，理解理解'

                }, {
                    imgSrc: 'http://120.79.192.193/assets/headImgs/17.jpg',
                    nickName: '鸟子',
                    lastSay: '好'

                }, {
                    imgSrc: 'http://120.79.192.193/assets/headImgs/18.jpg',
                    nickName: '蛇子',
                    lastSay: '这是网关地址 都用这个就行了'

                }, {
                    imgSrc: 'http://120.79.192.193/assets/headImgs/19.jpg',
                    nickName: '疯子',
                    lastSay: '我搞的那个融合框架 有大漏洞'

                }, {
                    imgSrc: 'http://120.79.192.193/assets/headImgs/20.jpg',
                    nickName: '野子',
                    lastSay: '帮我看个问题'

                }, {
                    imgSrc: 'http://120.79.192.193/assets/headImgs/21.jpg',
                    nickName: '鸽子',
                    lastSay: '是的'

                }, {
                    imgSrc: 'http://120.79.192.193/assets/headImgs/22.jpg',
                    nickName: '豹子',
                    lastSay: '我也是有底线的'
                }]
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