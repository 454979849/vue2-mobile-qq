<template>
    <ul class="friendSubList">
        <li v-for="(item,index) in subList" @click="openDialog(item)">
            <div class="imgBox left">
                <img :src="item.imgSrc">
            </div>
            <div class="detail right">
                <div>
                    <span>{{item.nickName}}</span>
                    <img v-if="item.vip==1" :src="vipSrc">
                    <img v-else-if="item.vip==2" :src="svipSrc">
                </div>
                <p>{{item.autograph}}</p>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "friendSubList",
        props: ['subList', 'openIndex'],
        created() {

        },
        data() {
            return {
                vipSrc: 'http://123.57.149.125/assets/vip.png',
                svipSrc: 'http://123.57.149.125/assets/svip.png'
            }
        },
        methods: {
            openDialog(item) {
                let id = item.id;
                this.$router.push('/dialog/' + id)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../common/mixin';

    .friendSubList {
        li {
            height: .6rem;

            .imgBox {
                width: 18%;
                height: 100%;
                @include flex-center();

                img {
                    width: .4rem;
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

                img {
                    height: .11rem;
                    margin-left: .07rem;
                }

                span {
                    font-size: .16rem;
                    vertical-align: middle;

                }

                p {
                    color: #666;
                    font-size: .13rem;
                }
            }
        }
    }
</style>
