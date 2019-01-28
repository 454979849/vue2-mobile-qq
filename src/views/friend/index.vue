<template>
    <div class="friendPage">

        <mHead></mHead>
        <mt-loadmore class="friend" id="friends" :top-method="loadTop" ref="loadmore">
            <div class="info">
                <div>
                    <span>朋友</span>
                    <p>要常联系</p>
                </div>
            </div>

            <mt-navbar v-model="selected">
                <mt-tab-item id="tab1">我的好友</mt-tab-item>
                <mt-tab-item id="tab2">我的视频</mt-tab-item>
                <!--<mt-tab-item id="tab3">公众号</mt-tab-item>-->
            </mt-navbar>

            <!-- tab-container -->
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="tab1">
                    <FriendList :friendList="friendList"></FriendList>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab2">
                    <MyVideo></MyVideo>
                </mt-tab-container-item>
                <!--<mt-tab-container-item id="tab3">-->
                    <!--<PublicList :publicList="publicList"></PublicList>-->
                <!--</mt-tab-container-item>-->
            </mt-tab-container>

        </mt-loadmore>
    </div>

</template>

<script>
    import Vue from 'vue'
    import mHead from '@/components/head'
    import FriendList from '@/components/friendList'
    // import GroupList from '@/components/groupList'
    // import PublicList from '@/components/publicList'
    import MyVideo from '@/components/myVideo'
    import {mapGetters} from 'vuex'

    import {Toast, Navbar, TabItem, Loadmore} from 'mint-ui';

    import {getFriend} from "@/api/friend";

    Vue.component(Loadmore.name, Loadmore);
    Vue.component(Navbar.name, Navbar);
    Vue.component(TabItem.name, TabItem);

    export default {
        name: "friend",
        components: {mHead, FriendList, MyVideo},
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
                this.$store.commit('SET_FRIEND_LIST', res);
                sessionStorage.setItem('_friendList', JSON.stringify(res));
                res.forEach(item => {
                    let gName=item.idA==this.userInfo.id?item.inA:item.inB;
                    let id=item.idA==this.userInfo.id?item.idB:item.idA;
                    if (groupNames.indexOf(gName) == -1) {
                        groupNames.push(gName);
                        friendList.push({
                            groupName: gName,
                            subList: [{
                                imgSrc: item.userHead,
                                nickName: item.nickName,
                                autograph: item.say,
                                vip: item.isVip,
                                id
                            }]
                        })
                    } else {
                        friendList.forEach((v, i) => {
                            if (v.groupName == gName) {
                                friendList[i].subList.push({
                                    imgSrc: item.userHead,
                                    nickName: item.nickName,
                                    autograph: item.say,
                                    vip: item.isVip,
                                    id
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
            margin: .1rem .08rem;
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
