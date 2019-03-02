<template>
    <div class="login">
        <div class="form" style="-webkit-user-select:text !important;">
            <mt-field type="number" v-model="qq" class="text" placeholder="账号" style="border-bottom:1px solid #eee;-webkit-user-select:text !important;"></mt-field>
            <mt-field type="password" v-model="pwd"  :attr="{ maxlength: 16 }" class="text" placeholder="密码" style="border-bottom:1px solid #eee;-webkit-user-select:text !important;"></mt-field>
            <mt-button type="primary" style="width:100%;margin-top:.45rem;" @click="login">登录</mt-button>
            <div style="text-align:center;margin-top:.3rem;color:#409eff;font-size:.16rem;">
                <router-link to="/register" tag="span" >注册</router-link>
            </div>
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
                    Toast('请输入账号');
                } else if (!this.pwd.trim()) {
                    Toast('请输入密码');
                } else {
                    Indicator.open('登录中...');
                    login({userName: this.qq, password: this.pwd}).then(res => {
                        Indicator.close();
                        res = res.data;
                        console.log(res);
                        Toast({
                            message: res.message,
                            position: 'center',
                            duration: 1000
                        })
                        if(res.code=='200'){
                            this.$store.commit('SET_USER_INFO',res.userInfo);
                            localStorage.setItem('_userInfo',JSON.stringify(res.userInfo));
                            socket.emit('login',res.userInfo.id);
                            this.$router.push(`/message`)
                        }
                    })

                }
            }
        },
        data() {
            return {
                qq: '111111',
                pwd: '123456'
            }
        },
        created() {
            this.$store.commit('SHOW_FOOT_CHANGE', false);
        }
    }
</script>

<style scoped lang="scss">
    .login {
        padding: .3rem;
        width:100%;
        height:100%;
        background-color:#fff;
        .form {
            margin-top: .48rem;
        }
    }
</style>
