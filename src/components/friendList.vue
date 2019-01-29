<template>
    <div class="friendList">
        <div class="groupItem" v-for="(item,index) in friendList">
            <div class="groupName" @click="openGroup(index)">
                <div class="l">
                    <p class="iconBox">
                        <i class="fa fa-angle-right" :class="{active:openStatus[index]}"></i>
                    </p>
                    <span>{{item.groupName}}</span>
                </div>
                <div class="r">
                    <span>{{item.subList.length}}</span>/<span>{{item.subList.length}}</span>
                </div>
            </div>
            <FriendSubList v-show="openStatus[index]" :subList="item.subList"></FriendSubList>
        </div>
    </div>
</template>

<script>
    import FriendSubList from './friendSubList'

    export default {
        name: "friendList",
        components: {FriendSubList},
        props: ['friendList'],
        data() {
            return {
                openStatus: []
            }
        },
        methods: {
            openGroup(index) {
                let bool = this.openStatus[index];
                let [...arr] = this.openStatus;
                arr[index] = !bool;
                this.openStatus = arr;
            }
        },
        watch: {
            friendList(list) {
                let arr = new Array(list.length);
                arr.fill(false);
                arr[0] = true;
                this.openStatus = arr;
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
