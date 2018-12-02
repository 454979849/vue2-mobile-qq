<template>
    <ul class="friendList">
        <li v-for="(item,index) in subList">
            <div class="imgBox left">
                <img v-lazy.container="item.imgSrc" alt="">
            </div>
            <div class="detail right">
                <span>{{item.nickName}}</span>
                <p>{{item.autograph}}</p>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "friendList",
        props: ['subList','openIndex']
    }
</script>

<style scoped lang="scss">
    @import '../common/mixin';

    .friendList {
        li {
            height: .6rem;
            .imgBox {
                width: 18%;
                height: 100%;
                @include flex-center();
                img {
                    height: .4rem;
                    border-radius: 50%;
                }
            }
            .detail {
                width: 82%;
                height: 100%;
                border-bottom: .01rem solid #eee;
                display: flex;
                flex-direction: column;
                padding-top: .1rem;
                padding-bottom: .12rem;
                justify-content: space-around;
                span {
                    font-size: .16rem;
                }
                p {
                    color: #666;
                    font-size: .13rem;
                }
            }
        }
    }
</style>