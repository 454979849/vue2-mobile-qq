<template>
    <div class="dynamic">
        <mHead pageType="dynamic" placeholder="大家都在搜：优酷杨东伟被调查"></mHead>
        <div class="wrapper">
            <div class="content">
                <div class="qqSpace">
                    <div class="l">
                        <img src="../../assets/qqSpace.jpg">
                        <span>好友动态</span>
                    </div>
                    <div class="r">
                        <img src="../../assets/qq.jpeg">
                        <i class="fa fa-angle-right"></i>
                    </div>
                </div>
                <ul class="flexBox">
                    <li><img src="../../assets/dinamicImgs/1.png" >
                        <p>好友微视</p>
                    </li>
                    <li><img src="../../assets/dinamicImgs/2.png" >
                        <p>附近</p>
                    </li>
                    <li><img src="../../assets/dinamicImgs/3.png" >
                        <p>兴趣部落</p>
                    </li>
                    <li><img src="../../assets/dinamicImgs/4.png" >
                        <p>京东购物</p>
                    </li>
                    <li><img src="../../assets/dinamicImgs/5.png" >
                        <p>游戏</p>
                    </li>
                    <li><img src="../../assets/dinamicImgs/6.png" >
                        <p>鹅漫U品</p>
                    </li>
                    <li><img src="../../assets/dinamicImgs/7.png" >
                        <p>阅读</p>
                    </li>
                    <li><img src="../../assets/dinamicImgs/8.png" >
                        <p>音乐</p>
                    </li>
                    <li><img src="../../assets/dinamicImgs/9.png" >
                        <p>运动</p>
                    </li>
                    <li><img src="../../assets/dinamicImgs/10.png" >
                        <p>吃喝玩乐</p>
                    </li>
                    <li><img src="../../assets/dinamicImgs/11.png" >
                        <p>同城服务</p>
                    </li>
                    <li><img src="../../assets/dinamicImgs/12.png" >
                        <p>腾讯新闻</p>
                    </li>
                </ul>
                <div class="newsBox">
                    <div id="today">
                        {{new Date().getMonth()+1}}月{{new Date().getDate()}}日
                        {{week[new Date().getDay()]}}
                    </div>
                    <h1 class="title">今日精选</h1>
                    <ul>
                        <li v-for="(item,index) in todaySelected">
                            <img :src="item.img" >
                            <h2>{{item.title}}</h2>
                            <p>{{item.subTitle}}</p>
                            <div class="bottom">
                                <div class="left">{{item.type}}</div>
                                <span class="right">&times;</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mHead from '@/components/head'

    export default {
        name: "dynamic",
        components: {mHead},
        data(){
            return {
                week:['星期天','星期一','星期二','星期三','星期四','星期五','星期六'],
                todaySelected:[{
                    type:'附近',
                    img:require('../../assets/dinamicImgs/01.png'),
                    title:'无辣不欢！唯有辣才能称得上美食！！',
                    subTitle:'点击火速围观',
                },{
                    type:'兴趣部落',
                    img:require('../../assets/dinamicImgs/02.png'),
                    title:'部唠娱|Chic Chili我们科室饭圈黑话"太太"哦~',
                    subTitle:'川妹纸小辣椒们专访上集来啦~队内团欺首曝光'
                }]
            }
        },
        created() {
            this.$store.commit('SHOW_FOOT_CHANGE', true);
        }
    }
</script>

<style scoped lang="scss">
    .dynamic {
        width: 100%;
        height: 100%;
        background: #F6F5F7;
        .wrapper {
            position: absolute;
            top: .6rem;
            left: 0;
            height: calc(100% - 1.14rem);
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            /*background: linear-gradient(to bottom, #fff 0%, #f6f6f7 100%);*/
            .content {
                .qqSpace {
                    padding: 0 .15rem;
                    display: flex;
                    height: .6rem;
                    align-items: center;
                    justify-content: space-between;
                    border-bottom: .01rem solid #eee;
                    background-color:#fff;
                    .l {
                        height: 100%;
                        display: flex;
                        align-items: center;
                        img {
                            width: .34rem;
                            margin-right: .15rem;
                        }
                        span {
                            color: #000;
                        }
                    }
                    .r {
                        height: 100%;
                        display: flex;
                        align-items: center;
                        img {
                            width: .34rem;
                            border-radius: 50%;
                            margin-right: .08rem;
                        }
                        i {
                            color: #bbb;
                            font-size: .25rem;
                            margin-right: .1rem;
                        }
                    }
                }
                .flexBox{
                    height:2.8rem;
                    display:flex;
                    flex-wrap:wrap;
                    li{
                        width:25%;
                        height:calc(100% / 3);
                        text-align:center;
                        padding-top:.2rem;
                        img{
                            height:.28rem;
                        }
                        p{
                            color:#4a4a4a;
                            margin-top:.1rem;
                            font-size:.1rem;
                        }
                    }
                }
                .newsBox{
                    padding:.2rem .2rem;
                    #today{
                        font-size:.12rem;
                        color:#777;
                    }
                    h1.title{
                        margin-top:.15rem;
                        font-size:.25rem;
                        font-weight:normal;
                        color:#000;
                    }
                    &>ul{
                        margin-top:.25rem;
                        li{
                            background:#fff;
                            border-top-left-radius:.08rem;
                            border-top-right-radius:.08rem;
                            overflow:hidden;
                            padding-bottom:.15rem;
                            margin-bottom:.3rem;
                            img{
                                width:100%;
                                height:1.8rem;
                            }
                            &>h2{
                                padding-left:.1rem;
                                padding-top:.12rem;
                                padding-right:.6rem;
                                line-height:1.2;
                                font-size:.22rem;
                            }
                            &>p{
                                font-size:.11rem;
                                padding-left:.1rem;
                                padding-top:.1rem;
                                color:#777;
                            }
                            .bottom{
                                color:#777;
                                padding-top:.12rem;
                                padding-left:.1rem;
                                font-size:.14rem;
                                padding-right:.1rem;
                                .right{
                                    font-size:.15rem;
                                    color:#d8d8d8;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>