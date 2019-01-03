<template>
    <div class="friendPage">

        <mHead pageType="friend" placeholder="搜索"></mHead>
        <mt-loadmore class="friend" id="friends" :top-method="loadTop" ref="loadmore">
            <div class="info">
                <div>
                    <span>坦白说</span>
                    <p>原来我的好友都是如此优秀</p>
                </div>
            </div>

            <mt-navbar v-model="selected">
                <mt-tab-item id="tab1">好友</mt-tab-item>
                <mt-tab-item id="tab2">群聊</mt-tab-item>
                <mt-tab-item id="tab3">公众号</mt-tab-item>
            </mt-navbar>

            <!-- tab-container -->
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="tab1">
                    <FriendList :friendList="friendList"></FriendList>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab2">
                    <GroupList></GroupList>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab3">
                    <PublicList :publicList="publicList"></PublicList>
                </mt-tab-container-item>
            </mt-tab-container>

        </mt-loadmore>
    </div>

</template>

<script>
    import Vue from 'vue'
    import mHead from '@/components/head'
    import FriendList from '@/components/friendList'
    import GroupList from '@/components/groupList'
    import PublicList from '@/components/publicList'
    import {mapGetters} from 'vuex'

    import {Toast, Navbar, TabItem, Loadmore} from 'mint-ui';

    import {getFriend} from "../../api/friend";

    Vue.component(Loadmore.name, Loadmore);
    Vue.component(Navbar.name, Navbar);
    Vue.component(TabItem.name, TabItem);

    export default {
        name: "friend",
        components: {mHead, FriendList, GroupList, PublicList},
        //进入路由前执行的方法，因为该组件被缓存，于是生命周期不会重走，于是在这里设置footer的高亮
        beforeRouteEnter(to,from,next) {
            next(vm=>{
                vm.setFootIndex();
            });
        },
        computed:{
            ...mapGetters(['userInfo'])
        },
        created() {
            this.$store.commit('SHOW_FOOT_CHANGE', true);
            getFriend(this.userInfo.id).then(res=>{
                console.log(res);
            })
        },
        methods: {
            setFootIndex(){
                this.$store.commit('SET_FOOT_INDEX', 1);
            },
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
            this.$store.commit('SET_FRIEND_LIST', this.friendList);
            sessionStorage.setItem('friendList', JSON.stringify(this.friendList));
        },
        data() {
            return {
                selected: 'tab1',
                friendList: [{
                    groupName: '分组一',
                    subList: [{
                        imgSrc: 'http://120.79.192.193/assets/headImgs/3.jpg',
                        nickName: '狗子',
                        autograph: '狗子的个性签名',
                        vip: 2
                    }, {
                        imgSrc: 'http://120.79.192.193/assets/headImgs/4.jpg',
                        nickName: '猫子',
                        autograph: '猫子的个性签名',
                        vip: 1
                    }]
                }, {
                    groupName: '分组二',
                    subList: [{
                        imgSrc: 'http://120.79.192.193/assets/headImgs/5.jpg',
                        nickName: '兔子',
                        autograph: '兔子的个性签名',
                        vip: 2
                    }, {
                        imgSrc: 'http://120.79.192.193/assets/headImgs/6.jpg',
                        nickName: '鸡子',
                        autograph: '鸡子的个性签名',
                        vip: 1
                    }, {
                        imgSrc: 'http://120.79.192.193/assets/headImgs/7.jpg',
                        nickName: '鸭子',
                        autograph: '鸭子的个性签名',
                        vip: 0
                    }, {
                        imgSrc: 'http://120.79.192.193/assets/headImgs/8.jpg',
                        nickName: '败子',
                        autograph: '败子的个性签名',
                        vip: 0
                    }, {
                        imgSrc: 'http://120.79.192.193/assets/headImgs/9.jpg',
                        nickName: '傻子',
                        autograph: '傻子的个性签名',
                        vip: 2
                    }]
                }, {
                    groupName: '分组三',
                    subList: [{
                        imgSrc: 'http://120.79.192.193/assets/headImgs/10.jpg',
                        nickName: '哈子',
                        autograph: '哈子的个性签名',
                        vip: 0
                    }, {
                        imgSrc: 'http://120.79.192.193/assets/headImgs/11.jpg',
                        nickName: '猪子',
                        autograph: '猪子的个性签名',
                        vip: 0
                    }, {
                        imgSrc: 'http://120.79.192.193/assets/headImgs/12.jpg',
                        nickName: '牛子',
                        autograph: '牛子的个性签名',
                        vip: 1
                    }, {
                        imgSrc: 'http://120.79.192.193/assets/headImgs/13.jpg',
                        nickName: '羊子',
                        autograph: '羊子的个性签名',
                        vip: 0
                    }, {
                        imgSrc: 'http://120.79.192.193/assets/headImgs/14.jpg',
                        nickName: '狮子',
                        autograph: '狮子的个性签名',
                        vip: 2
                    }, {
                        imgSrc: 'http://120.79.192.193/assets/headImgs/15.jpg',
                        nickName: '虎子',
                        autograph: '虎子的个性签名',
                        vip: 0
                    }, {
                        imgSrc: 'http://120.79.192.193/assets/headImgs/16.jpg',
                        nickName: '狼子',
                        autograph: '狼子的个性签名',
                        vip: 0
                    }, {
                        imgSrc: 'http://120.79.192.193/assets/headImgs/17.jpg',
                        nickName: '鸟子',
                        autograph: '鸟子的个性签名',
                        vip: 1
                    }, {
                        imgSrc: 'http://120.79.192.193/assets/headImgs/18.jpg',
                        nickName: '蛇子',
                        autograph: '蛇子的个性签名',
                        vip: 1
                    }]
                }, {
                    groupName: '分组四',
                    subList: [{
                        imgSrc: 'http://120.79.192.193/assets/headImgs/19.jpg',
                        nickName: '疯子',
                        autograph: '疯子的个性签名',
                        vip: 0
                    }, {
                        imgSrc: 'http://120.79.192.193/assets/headImgs/20.jpg',
                        nickName: '野子',
                        autograph: '野子的个性签名',
                        vip: 0
                    }, {
                        imgSrc: 'http://120.79.192.193/assets/headImgs/21.jpg',
                        nickName: '鸽子',
                        autograph: '鸽子的个性签名',
                        vip: 2
                    }, {
                        imgSrc: 'http://120.79.192.193/assets/headImgs/22.jpg',
                        nickName: '豹子',
                        autograph: '豹子的个性签名',
                        vip: 0
                    }]
                }],
                publicList: [{
                    letter: 'D',
                    subList: [{
                        imgSrc: 'http://120.79.192.193/assets/publicImgs/1.jpeg',
                        name: '道聚城'
                    }]
                }, {
                    letter: 'H',
                    subList: [{
                        imgSrc: 'http://120.79.192.193/assets/publicImgs/2.jpeg',
                        name: '好友动态'
                    }, {
                        imgSrc: 'http://120.79.192.193/assets/publicImgs/3.jpeg',
                        name: '黑口袋'
                    }]
                }]
            }
        }
    }
</script>
<style lang="scss">
    .mint-tab-item {
        margin-left: .4rem;
        margin-right: .4rem;
    }

    .mint-tab-item-label {
        font-size: .15rem;
        color: #555;
    }

    .groupItem:last-child {
        .friendList {
            li:last-child {
                .detail {
                    border-bottom: none !important;
                }
            }
        }
    }
</style>
<style scoped lang="scss">
    .friend {
        position: absolute;
        left: 0;
        top: .6rem;
        bottom: .54rem;
        width: 100%;
        background-color: #f7f7f9;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        .mint-tab-container-item {
            background-color: #fff;
            margin-top: .03rem;
            margin-bottom: .5rem;
        }
        .info {
            border: .01rem solid #eee;
            height: .9rem;
            margin: .1rem .12rem;
            background: #fff;
            border-radius: .04rem;
            padding-left: .1rem;
            display: flex;
            align-items: center;
            span {
                color: #000;
                font-size: .15rem;
            }
            p {
                font-size: .1rem;
                color: #666;
                margin-top: .08rem;
            }
        }
    }
</style>