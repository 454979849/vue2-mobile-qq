<template>
    <div class="register">
        <div class="form">
            <div class="formItem">
                <div class="content">
                    <label>qq：</label>
                    <input type="text" v-model="userName">
                    <span>(12位以内)</span>
                </div>
            </div>
            <div class="formItem">
                <div class="content">
                    <label>密码：</label>
                    <input type="password" v-model="password">
                    <span>(16位以内)</span>
                </div>
            </div>
            <div class="formItem">
                <div class="content">
                    <label>确认密码：</label>
                    <input type="password" v-model="passwordConfirm">
                    <span>两次输入的密码不一致</span>
                </div>
                <p class="red">密码不能超过16位</p>
            </div>
            <div class="formItem">
                <div class="content">
                    <label>昵称：</label>
                    <input type="text" v-model="nickName">
                    <span></span>
                </div>
                <p class="red">两次输入的密码不一致</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "register",
        created(){
            this.$store.commit('SHOW_FOOT_CHANGE', false);
        },
        data(){
            return {
                userName:'',
                password:'',
                passwordConfirm:'',
                nickname:'',
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../common/mixin";
    .register{
        width: 100%;
        height: 100%;
        @include flex-center();
    }
</style>