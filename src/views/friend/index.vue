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
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.setFootIndex();
            });
        },
        computed: {
            ...mapGetters(['userInfo'])
        },
        created() {
            this.$store.commit('SHOW_FOOT_CHANGE', true);
            getFriend(this.userInfo.id).then(res => {
                res = res.data.friendList;
                let friendList = [], groupNames = [];
                res.forEach(item => {
                    if (groupNames.indexOf(item.inA) == -1) {
                        groupNames.push(item.inA);
                        friendList.push({
                            groupName: item.inA,
                            subList: [{
                                imgSrc: item.userHead,
                                nickName: item.nickName,
                                autograph: item.say,
                                vip: item.isVip,
                                id:item.idB
                            }]
                        })
                    } else {
                        friendList.forEach((v, i) => {
                            if (v.groupName == item.inA) {
                                friendList[i].subList.push({
                                    imgSrc: item.userHead,
                                    nickName: item.nickName,
                                    autograph: item.say,
                                    vip: item.isVip,
                                    id:item.idB
                                })
                            }
                        })
                    }
                })
                this.friendList = friendList;
            })
        },
        methods: {
            setFootIndex() {
                this.$store.commit('SHOW_FOOT_CHANGE', true);
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
            sessionStorage.setItem('_friendList', JSON.stringify(this.friendList));
        },
        data() {
            return {
                selected: 'tab1',
                friendList: [],
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
