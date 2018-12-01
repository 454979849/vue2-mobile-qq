<template>
    <div class="welcome">
        <div id="btns">
            <mt-button type="default" style="background-color:#CCCBCC" @click="$router.push('/login')">登录</mt-button>
            <mt-button type="primary" @click="$router.push('/register')">新用户</mt-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "welcome",
        mounted(){
            this.$store.commit('SHOW_FOOT_CHANGE',false);
        }
    }
</script>

<style scoped lang="scss">
    .welcome {
        width: 100%;
        height: 100%;
        background: url(../../assets/welcomeBg.png) 0 0 no-repeat;
        background-size: contain;
        #btns {
            position: absolute;
            top: 86%;
            padding: 0 .1rem;
            width:100%;
            display: flex;
            button{
                text-align:center;
                flex:1;
                margin:.06rem;
                line-height: .32rem;
                color: white;
                font-size: .16rem;
                border-radius: .02rem;
                letter-spacing: .02rem;
                &.blue {
                    background: #9cf;
                }
                &.grey {
                    background: #ccc;
                }
            }
        }
    }
</style>