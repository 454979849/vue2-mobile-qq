<template>
    <div class="search">
        <div class="searchBox">
            <p class="searchBar" @click="$router.push('/search')" style="-webkit-user-select:text !important;">
                <i class="fa fa-search"></i>
                <input type="text" ref="keyword" v-model="keyWord" style="-webkit-user-select:text !important;">
            </p>
            <div class="cancelBox" @click="$router.back()">
                取消
            </div>
        </div>
        <ul class="resultBox">
            <li v-for="(item,index) in resultList" @click="$router.push(`/dialog/${item.id}`)">
                <img :src="item.userHead">
                <div>
                    <p v-html="highLight(item.nickName,keyWord)"></p>
                    <p>来自分组：<span>{{item.gName}}</span></p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {getFriend} from "@/api/friend";
    import {mapGetters} from 'vuex'

    export default {
        name: "search",
        computed: {
            ...mapGetters(['userInfo']),
            resultList() {
                if (this.keyWord.trim() == '') {
                    return [];
                } else {
                    return this.friendList.filter(item => {
                        return item.nickName.indexOf(this.keyWord) > -1;
                    })
                }
            }
        },
        created() {
            this.$store.commit('SHOW_FOOT_CHANGE', false);
            getFriend(this.userInfo.id).then(res => {
                let friendList = res.data.friendList;
                this.friendList = friendList.map(item => {
                    let {nickName, userHead} = item;
                    let gName = item.idA == this.userInfo.id ? item.inA : item.inB;
                    let id = item.idA == this.userInfo.id ? item.idB : item.idA;
                    return {userHead, nickName, gName, id}
                })
            })
        },
        mounted(){
            this.$refs.keyword.focus();
        },
        data() {
            return {
                keyWord: '',
                friendList: []
            }
        },
        methods: {
            highLight(name, arg1) {
                return name.replace(arg1, `<span style="color:#409eff;">${arg1}</span>`)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .search {
        width: 100%;
        height: 100%;
        background: #fff;

        .resultBox {
            width: calc(100% - 0.2rem);
            height: calc(100% - .6rem);
            overflow: scroll;
            -webkit-overflow-scrolling: touch;
            margin-left: .1rem;
            margin-right: .1rem;
            padding: .04rem 0;
            border-top: .01rem solid #ddd;
            background-color:#fff;
            li {
                height: .58rem;
                display: flex;
                align-items: center;
                padding-left: .2rem;

                &:active {
                    background: #eee;
                }

                img {
                    width: .48rem;
                    height: .48rem;
                    border-radius: 50%;
                }

                & > div {
                    margin-left: .15rem;
                    height: calc(100% - 0.1rem);

                    & > p {
                        height: 50%;
                        display: flex;
                        align-items: center;

                        &:first-child {
                            font-size: .18rem;
                        }

                        &:last-child {
                            font-size: .13rem;
                            color: #777;

                            span {
                                font-size: .13rem;
                            }
                        }
                    }
                }
            }
        }

        .searchBox {
            height: .6rem;
            padding: 0 .1rem;
            display: flex;
            align-items: center;
            background-color:#fff;
            .searchBar {
                height: .3rem;
                width: calc(100% - 0.5rem);
                border-radius: .03rem;
                background: #f1f1f1;
                margin-left: .04rem;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                padding-left: .08rem;

                i {
                    color: #aaa;
                    font-size: .16rem;
                    margin-right: .05rem;
                }

                input {
                    flex: 1;
                    height: 100%;
                    background: transparent;
                    outline: none;
                    border: none;
                }
            }

            .cancelBox {
                padding-left: .1rem;
            }
        }
    }
</style>
