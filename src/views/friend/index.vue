<template>
    <div class="friend">
        <mHead pageType="friend"></mHead>
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
                <div class="groupItem" v-for="(item,index) in friendList">
                    <div class="groupName">
                        <div class="l">
                            <p class="iconBox">
                                <i class="fa fa-angle-right" :class="{active:selectedGroupIndex==index}"></i>
                            </p>
                            <span>{{item.groupName}}</span>
                        </div>
                        <div class="r">
                            <span>{{item.subList.length}}</span>/<span>{{item.subList.length}}</span>
                        </div>
                    </div>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab2">
                <mt-cell v-for="n in 4" :title="'测试 ' + n"/>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab3">
                <mt-cell v-for="n in 6" :title="'选项 ' + n"/>
            </mt-tab-container-item>
        </mt-tab-container>

    </div>
</template>

<script>
    import Vue from 'vue'
    import mHead from '@/components/head'

    import {Navbar, TabItem} from 'mint-ui';

    Vue.component(Navbar.name, Navbar);
    Vue.component(TabItem.name, TabItem);

    export default {
        name: "friend",
        components: {mHead},
        mounted() {
            this.$store.commit('SHOW_FOOT_CHANGE', true);
        },
        data() {
            return {
                selected: 'tab1',
                selectedGroupIndex: 1,
                friendList: [{
                    groupName: '特别关心',
                    subList: []
                }, {
                    groupName: '分组一',
                    subList: [{
                        nickName: '狗子',
                        autograph: '狗子的个性签名'
                    }, {
                        nickName: '猫子',
                        autograph: '猫子的个性签名'
                    }]
                }, {
                    groupName: '分组二',
                    subList: [{
                        nickName: '兔子',
                        autograph: '兔子的个性签名'
                    }, {
                        nickName: '鸡子',
                        autograph: '鸡子的个性签名'
                    }, {
                        nickName: '鸭子',
                        autograph: '鸭子的个性签名'
                    }, {
                        nickName: '败子',
                        autograph: '败子的个性签名'
                    }, {
                        nickName: '傻子',
                        autograph: '傻子的个性签名'
                    }]
                }, {
                    groupName: '分组三',
                    subList: [{
                        nickName: '哈子',
                        autograph: '哈子的个性签名'
                    }, {
                        nickName: '猪子',
                        autograph: '猪子的个性签名'
                    }, {
                        nickName: '牛子',
                        autograph: '牛子的个性签名'
                    }, {
                        nickName: '羊子',
                        autograph: '羊子的个性签名'
                    }, {
                        nickName: '狮子',
                        autograph: '狮子的个性签名'
                    }, {
                        nickName: '虎子',
                        autograph: '虎子的个性签名'
                    }, {
                        nickName: '狼子',
                        autograph: '狼子的个性签名'
                    }, {
                        nickName: '鸟子',
                        autograph: '鸟子的个性签名'
                    }, {
                        nickName: '蛇子',
                        autograph: '蛇子的个性签名'
                    }]
                }, {
                    groupName: '分组四',
                    subList: [{
                        nickName: '疯子',
                        autograph: '疯子的个性签名'
                    }, {
                        nickName: '野子',
                        autograph: '野子的个性签名'
                    }, {
                        nickName: '鸽子',
                        autograph: '鸽子的个性签名'
                    }, {
                        nickName: '豹子',
                        autograph: '豹子的个性签名'
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
</style>
<style scoped lang="scss">
    .friend {
        width: 100%;
        height: 100%;
        background-color: #f7f7f9;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        .mint-tab-container-item {
            background-color: #fff;
            margin-top: .03rem;
            padding: .04rem 0;
        }
        .groupItem {
            .groupName {
                height: .5rem;
                display: flex;
                align-items: center;
                padding-left: .14rem;
                padding-right: .14rem;
                justify-content: space-between;
                .l {
                    display: flex;
                    align-items: center;
                    .iconBox {
                        width: .28rem;
                        i {
                            color: #bbb;
                            font-size: .26rem;
                            &.active {
                                transform: rotate(90deg);
                            }
                        }
                    }

                    span {
                        color: #000;
                        font-size: .16rem;
                    }
                }
                .r {
                    color: #888;
                    font-size: .11rem;
                }
            }
        }
        .info {
            border: .01rem solid #eee;
            height: .9rem;
            margin: .1rem .15rem;
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