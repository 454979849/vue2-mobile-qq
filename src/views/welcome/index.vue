<template>
    <div class="welcome">
        <img src="../../assets/welcomeBg.png" style="width:40%;margin-top:40%;">
        <div id="btns">
            <mt-button type="primary" @click="$router.push('/login')">登录</mt-button>
            <mt-button type="primary" @click="$router.push('/register')">新用户</mt-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "welcome",
        created(){
            this.$store.commit('SHOW_FOOT_CHANGE',false);
        }
    }
</script>

<style scoped lang="scss">
    .welcome {
        width: 100%;
        height: 100%;
        text-align:center;
        background-color:#fff;
        #btns {
            position: absolute;
            bottom:.7rem;
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
