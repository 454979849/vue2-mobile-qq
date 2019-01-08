<template>
    <div class="dialog">
        <div class="currentFriend">
            <i class="fa fa-angle-left"></i>
            <span>{{currentNickName}}</span>
        </div>
        <div class="dialogWrap">
            <ul>
                <li v-for="(item,index) in currentMessage" :key="index" class="mItem">
                    <div class="left" v-if="item.fromId!=userInfo.id">
                        {{item.content}}
                    </div>
                    <div class="right" v-if="item.fromId==userInfo.id">
                        {{item.content}}
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "currentDialog",
        computed: {
            ...mapGetters(['currentMessage','userInfo'])
        },
        data() {
            return {
                currentNickName: ''
            }
        },
        created() {
            this.$store.commit('SHOW_FOOT_CHANGE', false);
            console.log(this.currentMessage);
            this.currentNickName = this.currentMessage[0].nickName;
        }
    }
</script>

<style scoped lang="scss">
    @import "../../common/mixin.scss";

    .dialog {
        width: 100%;
        height: 100%;
        background: #ecedf0;
        .dialogWrap{
            &>ul{
                padding:0 0.1rem;
                li{
                    height:.7rem;
                    &>div{
                        height:.4rem;
                        margin-top:.15rem;
                    }
                }
            }

        }
        .currentFriend {
            height: .6rem;
            background: rgba(255, 255, 255, .2);
            text-align: center;
            position: relative;

            i {
                @include extend-click();
                font-size: .34rem;
                position: absolute;
                left: .12rem;;
                top: .13rem;
            }

            span {
                font-size: .19rem;
                line-height: .6rem;
            }
        }
    }
</style>
