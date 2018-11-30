<template>
    <div class="login">
        <div class="logo">
            <img src="../../assets/rqk.png">
            <span>QQ</span>
        </div>
        <div class="form">
            <input type="number" v-model="qq" class="text" placeholder="QQ号">
            <input type="password" v-model="pwd" maxlength="16" class="text" placeholder="密码">
            <mt-button type="primary" style="width:100%;margin-top:.45rem;" @click="login">登录</mt-button>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    export default {
        name: "login",
        methods: {
            login() {
                if(!this.qq.trim()){
                    Toast('请输入QQ号');
                }else if(!this.pwd.trim()){
                    Toast('请输入密码')
                }
            }
        },
        data() {
            return {
                qq: '',
                pwd: ''
            }
        }
    }
</script>

<style scoped lang="scss">
    .login {
        padding: .3rem;
        .logo {
            margin-top: .5rem;
            img {
                height: .3rem;
                vertical-align: middle;
                margin-right: .18rem;
            }
            span {
                font-size: .28rem;
                color: #666566;
                vertical-align: middle;
            }
        }
        .form {
            margin-top: .48rem;
            input {
                display: block;
                width: 100%;
            }
        }
    }
</style>