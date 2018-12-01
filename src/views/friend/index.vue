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
                <mt-cell v-for="n in 10" :title="'内容 ' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="tab2">
                <mt-cell v-for="n in 4" :title="'测试 ' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="tab3">
                <mt-cell v-for="n in 6" :title="'选项 ' + n" />
            </mt-tab-container-item>
        </mt-tab-container>

    </div>
</template>

<script>
    import Vue from 'vue'
    import mHead from '@/components/head'

    import { Navbar, TabItem } from 'mint-ui';

    Vue.component(Navbar.name, Navbar);
    Vue.component(TabItem.name, TabItem);

    export default {
        name: "friend",
        components: {mHead},
        data(){
            return {
                selected:'tab1'
            }
        }
    }
</script>

<style scoped lang="scss">
    .friend {
        width: 100%;
        height: 100%;
        background-color: #f7f7f9;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        .info{
            border:.01rem solid #eee;
            height:.9rem;
            margin:.1rem .15rem;
            background:#fff;
            border-radius:.04rem;
            padding-left:.1rem;
            display:flex;
            align-items:center;
            span{
                color:#000;
                font-size:.15rem;
            }
            p{
                font-size:.1rem;
                color:#666;
                margin-top:.08rem;
            }
        }
    }
</style>