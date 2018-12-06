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

    import {Toast, Navbar, TabItem, Loadmore} from 'mint-ui';

    Vue.component(Loadmore.name, Loadmore);
    Vue.component(Navbar.name, Navbar);
    Vue.component(TabItem.name, TabItem);

    export default {
        name: "friend",
        components: {mHead,FriendList,GroupList,PublicList},
        created() {
            this.$store.commit('SHOW_FOOT_CHANGE', true);
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
        mounted(){
          this.$store.commit('SET_FRIEND_LIST',this.friendList);
          console.log()
          sessionStorage.setItem('friendList',JSON.stringify(this.friendList));
        },
        data() {
            return {
                selected: 'tab1',
                friendList: [{
                    groupName: '分组一',
                    subList: [{
                        imgSrc: require('../../assets/headimgs/3.jpg'),
                        nickName: '狗子',
                        autograph: '狗子的个性签名',
                        vip: 2
                    }, {
                        imgSrc: require('../../assets/headimgs/4.jpg'),
                        nickName: '猫子',
                        autograph: '猫子的个性签名',
                        vip: 1
                    }]
                }, {
                    groupName: '分组二',
                    subList: [{
                        imgSrc: require('../../assets/headimgs/5.jpg'),
                        nickName: '兔子',
                        autograph: '兔子的个性签名',
                        vip: 2
                    }, {
                        imgSrc: require('../../assets/headimgs/6.jpg'),
                        nickName: '鸡子',
                        autograph: '鸡子的个性签名',
                        vip: 1
                    }, {
                        imgSrc: require('../../assets/headimgs/7.jpg'),
                        nickName: '鸭子',
                        autograph: '鸭子的个性签名',
                        vip: 0
                    }, {
                        imgSrc: require('../../assets/headimgs/8.jpg'),
                        nickName: '败子',
                        autograph: '败子的个性签名',
                        vip: 0
                    }, {
                        imgSrc: require('../../assets/headimgs/9.jpg'),
                        nickName: '傻子',
                        autograph: '傻子的个性签名',
                        vip: 2
                    }]
                }, {
                    groupName: '分组三',
                    subList: [{
                        imgSrc: require('../../assets/headimgs/10.jpg'),
                        nickName: '哈子',
                        autograph: '哈子的个性签名',
                        vip: 0
                    }, {
                        imgSrc: require('../../assets/headimgs/11.jpg'),
                        nickName: '猪子',
                        autograph: '猪子的个性签名',
                        vip: 0
                    }, {
                        imgSrc: require('../../assets/headimgs/12.jpg'),
                        nickName: '牛子',
                        autograph: '牛子的个性签名',
                        vip: 1
                    }, {
                        imgSrc: require('../../assets/headimgs/13.jpg'),
                        nickName: '羊子',
                        autograph: '羊子的个性签名',
                        vip: 0
                    }, {
                        imgSrc: require('../../assets/headimgs/14.jpg'),
                        nickName: '狮子',
                        autograph: '狮子的个性签名',
                        vip: 2
                    }, {
                        imgSrc: require('../../assets/headimgs/15.jpg'),
                        nickName: '虎子',
                        autograph: '虎子的个性签名',
                        vip: 0
                    }, {
                        imgSrc: require('../../assets/headimgs/16.jpg'),
                        nickName: '狼子',
                        autograph: '狼子的个性签名',
                        vip: 0
                    }, {
                        imgSrc: require('../../assets/headimgs/17.jpg'),
                        nickName: '鸟子',
                        autograph: '鸟子的个性签名',
                        vip: 1
                    }, {
                        imgSrc: require('../../assets/headimgs/18.jpg'),
                        nickName: '蛇子',
                        autograph: '蛇子的个性签名',
                        vip: 1
                    }]
                }, {
                    groupName: '分组四',
                    subList: [{
                        imgSrc: require('../../assets/headimgs/19.jpg'),
                        nickName: '疯子',
                        autograph: '疯子的个性签名',
                        vip: 0
                    }, {
                        imgSrc: require('../../assets/headimgs/20.jpg'),
                        nickName: '野子',
                        autograph: '野子的个性签名',
                        vip: 0
                    }, {
                        imgSrc: require('../../assets/headimgs/21.jpg'),
                        nickName: '鸽子',
                        autograph: '鸽子的个性签名',
                        vip: 2
                    }, {
                        imgSrc: require('../../assets/headimgs/22.jpg'),
                        nickName: '豹子',
                        autograph: '豹子的个性签名',
                        vip: 0
                    }]
                }],
                publicList:[{
                    letter:'D',
                    subList:[{
                        imgSrc:require('../../assets/publicImgs/1.jpeg'),
                        name:'道聚城'
                    }]
                },{
                    letter:'H',
                    subList:[{
                        imgSrc:require('../../assets/publicImgs/2.jpeg'),
                        name:'好友动态'
                    },{
                        imgSrc:require('../../assets/publicImgs/3.jpeg'),
                        name:'黑口袋'
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