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
    import {Toast, Indicator} from 'mint-ui';

    import {login} from '@/api/login'

    export default {
        name: "login",
        methods: {
            login() {
                if (!this.qq.trim()) {
                    Toast('请输入QQ号');
                } else if (!this.pwd.trim()) {
                    Toast('请输入密码');
                } else {
                    Indicator.open('登录中...');
                    login({userName: this.qq, password: this.pwd}).then(res => {
                        Indicator.close();
                        res = res.data;
                        Toast({
                            message: res.message,
                            position: 'center',
                            duration: 1000
                        })
                        this.$router.push('/message/1')
                    })

                }
            }
        },
        data() {
            return {
                qq: localStorage.getItem('_userName') ? localStorage.getItem('_userName') : '111111',
                pwd: localStorage.getItem('_password') ? localStorage.getItem('_password') : '123456'
            }
        },
        mounted() {
            this.$store.commit('SHOW_FOOT_CHANGE', false);
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