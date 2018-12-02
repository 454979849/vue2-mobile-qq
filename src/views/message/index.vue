<template>
    <div class="message">
        <mHead pageType="message"></mHead>
        <MessageList :messageList="messageList"></MessageList>
    </div>
</template>

<script>
    import MessageList from '@/components/messageList'
    import mHead from '@/components/head'
    import {Indicator, Search} from 'mint-ui';

    export default {
        name: "message",
        components:{MessageList,mHead},
        data() {
            return {
                searchWords: '',
                messageList: [{
                    imgSrc: require('../../assets/headimgs/2.jpg'),
                    nickName: '武汉慧擎科技',
                    lastSay: '210数据库已扩容完成，可以使用了'
                }, {
                    imgSrc: require('../../assets/headimgs/3.jpg'),
                    nickName: '狗子',
                    lastSay: '请你吃鸡蛋'
                }, {
                    imgSrc: require('../../assets/headimgs/4.jpg'),
                    nickName: '猫子',
                    lastSay: '我先把你拉进群里，12月10日左右对接'
                }, {
                    imgSrc: require('../../assets/headimgs/5.jpg'),
                    nickName: '兔子',
                    lastSay: '你个傻逼玩手游？'
                }, {
                    imgSrc: require('../../assets/headimgs/6.jpg'),
                    nickName: '鸡子',
                    lastSay: '嗯'

                }, {
                    imgSrc: require('../../assets/headimgs/7.jpg'),
                    nickName: '鸭子',
                    lastSay: '然后其他时间  把服务器玩熟了'

                }, {
                    imgSrc: require('../../assets/headimgs/8.jpg'),
                    nickName: '败子',
                    lastSay: '宝安智创高地'

                }, {
                    imgSrc: require('../../assets/headimgs/9.jpg'),
                    nickName: '傻子',
                    lastSay: '估计有人下小电影'

                }, {
                    imgSrc: require('../../assets/headimgs/10.jpg'),
                    nickName: '哈子',
                    lastSay: '缩写'

                }, {
                    imgSrc: require('../../assets/headimgs/11.jpg'),
                    nickName: '猪子',
                    lastSay: '有一栋大厦是的'

                }, {
                    imgSrc: require('../../assets/headimgs/12.jpg'),
                    nickName: '牛子',
                    lastSay: '现在过来'

                }, {
                    imgSrc: require('../../assets/headimgs/13.jpg'),
                    nickName: '羊子',
                    lastSay: '这个页面里的格子  可以拖拽排序'

                }, {
                    imgSrc: require('../../assets/headimgs/14.jpg'),
                    nickName: '狮子',
                    lastSay: '额，找到一个有效的了'

                }, {
                    imgSrc: require('../../assets/headimgs/15.jpg'),
                    nickName: '虎子',
                    lastSay: '是啊 估计又发不了'

                }, {
                    imgSrc: require('../../assets/headimgs/16.jpg'),
                    nickName: '狼子',
                    lastSay: '嗯嗯嗯嗯，老婆最重要，理解理解'

                }, {
                    imgSrc: require('../../assets/headimgs/17.jpg'),
                    nickName: '鸟子',
                    lastSay: '好'

                }, {
                    imgSrc: require('../../assets/headimgs/18.jpg'),
                    nickName: '蛇子',
                    lastSay: '这是网关地址 都用这个就行了'

                }, {
                    imgSrc: require('../../assets/headimgs/19.jpg'),
                    nickName: '疯子',
                    lastSay: '我搞的那个融合框架 有大漏洞'

                }, {
                    imgSrc: require('../../assets/headimgs/20.jpg'),
                    nickName: '野子',
                    lastSay: '帮我看个问题'

                }, {
                    imgSrc: require('../../assets/headimgs/21.jpg'),
                    nickName: '鸽子',
                    lastSay: '是的'

                }, {
                    imgSrc: require('../../assets/headimgs/22.jpg'),
                    nickName: '豹子',
                    lastSay: '我也是有底线的'
                }]
            }
        },
        mounted() {
            this.$store.commit('SHOW_FOOT_CHANGE', true);
        }
    }
</script>

<style scoped lang="scss">
    .message {
        width: 100%;
        height: 100%;
    }
</style>