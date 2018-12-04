<template>
    <div class="dynamic">
        <mHead pageType="dynamic" placeholder="大家都在搜：优酷杨东伟被调查"></mHead>
        <div class="wrapper">
            <div class="content">
                <div class="qqSpace">
                    <div class="l">
                        <img src="../../assets/qqSpace.jpg" >
                        <span>好友动态</span>
                    </div>
                    <div class="r">
                        <img src="../../assets/qq.jpeg" >
                        <i class="fa fa-angle-right"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mHead from '@/components/head'

    export default {
        name: "dynamic",
        components:{mHead},
        created(){
            this.$store.commit('SHOW_FOOT_CHANGE', true);
        }
    }
</script>

<style scoped lang="scss">
.dynamic{
    width:100%;
    height:100%;
    background:#f7f7f9;
    .wrapper{
        position:absolute;
        top:.6rem;
        left:0;
        height:calc(100% - 1.14rem);
        overflow-y:auto;
        -webkit-overflow-scrolling: touch;
        background: linear-gradient(to bottom, #fff 0%,#f6f6f7 100%);
        .content{
            padding:0 .15rem;
            .qqSpace{
                display:flex;
                height:.6rem;
                align-items: center;
                justify-content: space-between;
                border-bottom:.01rem solid #eee;
                .l{
                    height:100%;
                    display:flex;
                    align-items: center;
                    img{
                        width:.34rem;
                        margin-right:.15rem;
                    }
                    span{
                        color:#000;
                    }
                }
                .r{
                    height:100%;
                    display:flex;
                    align-items: center;
                    img{
                        width:.34rem;
                        border-radius:50%;
                        margin-right:.08rem;
                    }
                    i{
                        color:#bbb;
                        font-size:.25rem;
                        margin-right:.1rem;
                    }
                }
            }
        }
    }
}
</style>