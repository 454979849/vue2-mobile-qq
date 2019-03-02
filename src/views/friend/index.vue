<template>
    <div class="friendPage">

        <mHead></mHead>
        <mt-loadmore class="friend" id="friends" ref="loadmore">
            <div class="info">
                <div>
                    <span>提示</span>
                    <p>所有内容和图片全部来自数据库，所有账号的密码都是123456，主账号111111拥有所有好友，基于socket，可以俩俩互聊。</p>
                </div>
            </div>

            <mt-navbar v-model="selected" style="background-color:#fff;">
                <mt-tab-item id="tab1">我的好友</mt-tab-item>
                <mt-tab-item id="tab2">我的音乐</mt-tab-item>
            </mt-navbar>

            <!-- tab-container -->
            <mt-tab-container v-model="selected" style="background-color:#fff;">
                <mt-tab-container-item id="tab1">
                    <FriendList :friendList="friendList"></FriendList>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab2">
                    <MyAudio></MyAudio>
                </mt-tab-container-item>
            </mt-tab-container>

        </mt-loadmore>
    </div>

</template>

<script>
    import Vue from 'vue'
    import mHead from '@/components/head'
    import FriendList from '@/components/friendList'
    import MyAudio from '@/components/myAudio'
    import {mapGetters} from 'vuex'

    import {Toast, Navbar, TabItem, Loadmore} from 'mint-ui';

    import {getFriend} from "@/api/friend";

    Vue.component(Loadmore.name, Loadmore);
    Vue.component(Navbar.name, Navbar);
    Vue.component(TabItem.name, TabItem);

    export default {
        name: "friend",
        components: {mHead, FriendList, MyAudio},
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
            this.$store.dispatch('GET_MESSAGE', this.userInfo.id);
            this.renderFriend();
        },
        methods: {
            setFootIndex() {
                this.$store.commit('SHOW_FOOT_CHANGE', true);
                this.$store.commit('SET_FOOT_INDEX', 1);
            },
            loadTop() {
                this.renderFriend(() => {
                    Toast({
                        message: '更新成功',
                        position: 'center',
                        duration: 1000
                    });
                    this.$refs.loadmore.onTopLoaded();
                })
            },
            renderFriend(callback) {
                getFriend(this.userInfo.id).then(res => {
                    res = res.data.friendList;
                    let friendList = [], groupNames = [];
                    this.$store.commit('SET_FRIEND_LIST', res);
                    sessionStorage.setItem('_friendList', JSON.stringify(res));
                    res.forEach(item => {
                        let gName = item.idA == this.userInfo.id ? item.inA : item.inB;
                        let id = item.idA == this.userInfo.id ? item.idB : item.idA;
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
                    if(callback){
                        callback();
                    }
                })
            }
        },
        data() {
            return {
                selected: 'tab1',
                friendList: []
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
            padding-right: .1rem;
            display: flex;
            align-items: center;

            span {
                color: #000;
                font-size: .15rem;
            }

            p {
                font-size: .12rem;
                color: #666;
                margin-top: .08rem;
                line-height:1.5;
            }
        }
    }
</style>
