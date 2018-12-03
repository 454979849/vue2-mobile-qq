<template>
    <div class="friendList">
        <div class="groupItem" v-for="(item,index) in friendList">
            <div class="groupName" @click="openGroup(index)">
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
            <FriendSubList v-show="selectedGroupIndex==index" :subList="item.subList"></FriendSubList>
        </div>
    </div>
</template>

<script>
    import FriendSubList from './friendSubList'
    export default {
        name: "friendList",
        components:{FriendSubList},
        props:['friendList'],
        data(){
            return {
                selectedGroupIndex: 1
            }
        },
        methods:{
            openGroup(index) {
                if (index == this.selectedGroupIndex) this.selectedGroupIndex = -1
                else this.selectedGroupIndex = index;
            }
        }
    }
</script>

<style scoped lang="scss">
    .groupItem {
        &:last-child {
            .friendList {
                li:last-child {
                    .detail {
                        background: red;
                        border-bottom: none !important;
                    }
                }
            }
        }
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
</style>