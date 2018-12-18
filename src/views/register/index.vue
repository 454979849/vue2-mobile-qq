<template>
    <div class="register">
        <div class="form">
            <div class="formItem">
                <mt-field :class="[{active:rules.userName.active},'inputBox']" ref="userName" v-number
                          v-limit="{length:12}" type="text" placeholder="请输入qq号(12位以内数字)" v-model="userName"></mt-field>
                <div class="warningBox">
                    <p class="red" v-show="rules.userName.show">{{rules.userName.warning}}</p>
                </div>
            </div>
            <div class="formItem">
                <mt-field :class="[{active:rules.password.active},'inputBox']" ref="password" v-limit="{length:16}"
                          type="password" placeholder="请输入密码(16位以内)" v-model="password"></mt-field>
                <div class="warningBox">
                    <p class="red" v-show="rules.password.show">{{rules.password.warning}}</p>
                </div>
            </div>
            <div class="formItem">
                <mt-field :class="[{active:rules.passwordConfirm.active},'inputBox']" ref="passwordConfirm"
                          v-limit="{length:16}" type="password" placeholder="请再次输入密码"
                          v-model="passwordConfirm"></mt-field>
                <div class="warningBox">
                    <p class="red" v-show="rules.passwordConfirm.show">{{rules.passwordConfirm.warning}}</p>
                </div>
            </div>
            <div class="formItem">
                <mt-field :class="[{active:rules.nickName.active},'inputBox']" ref="nickName" type="text"
                          placeholder="请输入昵称(12位字节长度以内)" v-model="nickName"></mt-field>
                <div class="warningBox">
                    <p class="red" v-show="rules.nickName.show">{{rules.nickName.warning}}</p>
                </div>
            </div>
        </div>
        <mt-button class="submit" type="primary" style="width:100%;" @click="submit">注册</mt-button>
    </div>
</template>

<script>
    import {register} from "../../api/register";
    import {Toast,Indicator} from 'mint-ui';


    export default {
        name: "register",
        created() {
            this.$store.commit('SHOW_FOOT_CHANGE', false);
        },
        data() {
            return {
                rules: {
                    userName: {
                        show: false,
                        require: true,
                        warning: 'qq号不能为空',
                        active: false
                    },
                    password: {
                        show: false,
                        require: true,
                        warning: '密码不能为空',
                        active: false
                    },
                    passwordConfirm: {
                        show: false,
                        require: true,
                        warning: '两次输入的密码不一致',
                        active: false
                    },
                    nickName: {
                        show: false,
                        require: true,
                        warning: '昵称不能为空或超过长度限制',
                        active: false
                    }
                },
                userName: '454979849',
                password: '123456',
                passwordConfirm: '123456',
                nickName: '大约在冬季',
            }
        },
        methods: {
            submit() {
                for (var key in this.rules) {
                    this.rules[key].active = false;
                    this.rules[key].show = false;
                }
                if (this.userName.trim() == '') {
                    this.rules.userName.show = true;
                    this.$refs.userName.$refs.input.focus();
                    this.rules.userName.active = true;
                } else if (this.password.trim() == '') {
                    this.rules.password.show = true;
                    this.$refs.password.$refs.input.focus();
                    this.rules.password.active = true;
                } else if (this.passwordConfirm != this.password) {
                    this.rules.passwordConfirm.show = true;
                    this.$refs.passwordConfirm.$refs.input.focus();
                    this.rules.passwordConfirm.active = true;
                } else {
                    //计算判断昵称输入的字节长度是否超过12，中文为2字节，其他为1字节
                    let length = this.nickName.length;
                    let chineseArr = this.nickName.match(/[\u4e00-\u9fa5]/ig)
                    let chineseArrLength = chineseArr.length;
                    if (length - chineseArrLength + chineseArrLength * 2 > 12) {
                        this.rules.nickName.show = true;
                        this.$refs.nickName.$refs.input.focus();
                        this.rules.nickName.active = true;
                    } else {
                        Indicator.open();
                        //注册接口
                        register({
                            userName: this.userName, password: this.password, nickName: this.nickName
                        }).then(res => {
                            Indicator.close();
                            console.log(res);
                        })
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
    .register {
        .mint-field-core {
            height: 48px;
        }
    }
</style>
<style scoped lang="scss">
    .register {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 0 .2rem;
        .formItem {
            margin-top: .2rem;
            .inputBox {
                border-bottom: .01rem solid #ddd;
                &.active {
                    border-bottom: .01rem solid red;
                }
            }
            .warningBox {
                margin-top: .05rem;
                height: .2rem;
                p.red {
                    color: red;
                    font-size: .12rem;
                    padding-left: 10px;
                }
            }
        }
    }
</style>