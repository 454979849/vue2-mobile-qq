<template>
    <div class="groupList">
        <div class="groupItem">
            <div class="groupName" @click="openGroup(0)">
                <div class="l">
                    <p class="iconBox">
                        <i class="fa fa-angle-right" :class="{active:selectedGroupIndex==0}"></i>
                    </p>
                    <span>置顶群聊</span>
                </div>
                <div class="r">
                    <span>{{topGroupList.length}}</span>
                </div>
            </div>
            <GroupSubList :subList="topGroupList" v-show="selectedGroupIndex==0"></GroupSubList>
        </div>
        <div class="groupItem">
            <div class="groupName" @click="openGroup(1)">
                <div class="l">
                    <p class="iconBox">
                        <i class="fa fa-angle-right" :class="{active:selectedGroupIndex==1}"></i>
                    </p>
                    <span>我创建的群聊</span>
                </div>
                <div class="r">
                    <span>{{myCreateGroupList.length}}</span>
                </div>
            </div>
            <GroupSubList :subList="myCreateGroupList" v-show="selectedGroupIndex==1"></GroupSubList>
        </div>
        <div class="groupItem">
            <div class="groupName" @click="openGroup(2)">
                <div class="l">
                    <p class="iconBox">
                        <i class="fa fa-angle-right" :class="{active:selectedGroupIndex==2}"></i>
                    </p>
                    <span>我创建的群聊</span>
                </div>
                <div class="r">
                    <span>{{myJoinGroupList.length}}</span>
                </div>
            </div>
            <GroupSubList :subList="myJoinGroupList" v-show="selectedGroupIndex==2"></GroupSubList>
        </div>
    </div>
</template>

<script>
    import GroupSubList from './groupSubList'
    export default {
        name: "groupList",
        components:{GroupSubList},
        data(){
            return {
                selectedGroupIndex:2,
                topGroupList:[{
                    name:'聊城前端',
                    lastTime:'1543845524503',
                    imgSrc:require('../assets/groupImgs/1.png')
                }],
                myCreateGroupList:[{
                    name:'聊城前端',
                    lastTime:'1543845524503',
                    imgSrc:require('../assets/groupImgs/1.png')
                }],
                myJoinGroupList:[{
                    name:'时空信息云平台产品组',
                    lastTime:'1543845649689',
                    imgSrc:require('../assets/groupImgs/2.png')
                },{
                    name:'003号宝安UGIS',
                    lastTime:'1543845682950',
                    imgSrc:require('../assets/groupImgs/3.jpg')
                },{
                    name:'编程交流',
                    lastTime:'1543845773686',
                    imgSrc:require('../assets/groupImgs/4.jpg')
                }]
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