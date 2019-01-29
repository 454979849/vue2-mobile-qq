<template>
    <div id="app" :class="{move:showUserPanel}">
        <div id="userPanel"  v-show="showMask">
            <div class="imgBox">
                <img :src="userInfo.userBg" class="userBg" ref="userBg">
                <div class="content">
                    <div class="userName">
                        <img :src="userInfo.userHead">
                        <span>{{userInfo.nickName}}</span>
                    </div>
                    <div class="userInfo">
                        <img class="vip"
                             :src="userInfo.isVip==2?'http://120.79.192.193/assets/svip.png':userInfo.isVip==1?'http://120.79.192.193/assets/vip.png':''">
                    </div>
                </div>
            </div>
            <div class="menu">
                <ul>
                    <li class="signOut">
                        <p class="iBox">
                            <i class="fa fa-sign-out"></i>
                        </p>
                        <span @click="logout">退出登录</span>
                    </li>
                </ul>
            </div>
        </div>
        <div id="mask" v-show="showMask" @click="close"></div>
        <keep-alive :include="['friend','search']">
            <router-view v-transition/>
        </keep-alive>
        <Foot v-if="showFoot"></Foot>
        <audio controls hidden id="audio" ref="audio" autoplay loop src="http://120.79.192.193/assets/cuimian.mp3">
            您的浏览器不支持audio标签
        </audio>
    </div>
</template>

<script>
    import Foot from '@/components/foot'
    import {mapGetters} from 'vuex'
    import {MessageBox} from 'mint-ui'

    export default {
        components: {Foot},
        computed: {
            ...mapGetters(['userInfo','showFoot', 'showMask', 'showUserPanel'])
        },
        data() {
            return {
                imgBottom: '',
                timer: null,
                direction: 'up'
            }
        },
        created(){
            socket.on('msgComming',()=>{
                this.$store.dispatch('GET_MESSAGE',this.userInfo.id);
            })
        },
        mounted() {
            this.timer = setInterval(() => {
                var bottom = parseFloat(getComputedStyle(this.$refs.userBg).bottom);
                if (this.direction == 'up') {
                    bottom++;
                    if (bottom == 0) {
                        this.direction = 'down'
                    }
                } else {
                    bottom--;
                    if (bottom == -60) {
                        this.direction = 'up'
                    }
                }
                this.$refs.userBg.style.bottom = bottom + 'px'
            }, 40)
        },
        methods: {
            close() {
                this.$store.commit('SET_USER_PANEL', false);
                this.$store.commit('SET_MASK', false);
            },
            logout(){
                MessageBox.confirm('确定要退出登录吗?', '提示').then(()=>{
                    localStorage.removeItem('_userInfo');
                    this.$store.commit('SET_USER_PANEL',false);
                    this.$store.commit('SET_MASK',false);
                    this.$router.push('/welcome')
                })
            }
        }
    }
</script>
<style scoped lang="scss">

    #app {
        transition: transform .3s;

        &.move {
            transform: translate3d(78%, 0, 0);
        }

        #userPanel {
            width: 78%;
            position: absolute;
            height: 100%;
            left: -78%;
            top: 0;
            z-index: 1001;
            background: #fff;
            .menu {
                padding-left: .22rem;
                padding-top: .3rem;
                ul {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    li:not(:first-child) {
                        margin-top: .24rem;
                    }
                    .signOut{
                        span:active{
                            color:red;
                        }
                    }
                }
                p.iBox {
                    display: inline-block;
                    text-align: center;
                    width: .22rem;
                }

                i {
                    color: #606377;
                }

                span {
                    color: #000;
                    font-size: .16rem;
                    margin-left: .1rem;
                }
            }

            .imgBox {
                height: 2.4rem;
                overflow: hidden;
                position: relative;
                width: 100%;
                overflow: hidden;

                img.userBg {
                    width: 100%;
                    position: absolute;
                    bottom: -60px;
                    left: 0;
                    z-index: 1;
                }

                .content {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    z-index: 2;
                    top: 55%;
                    padding-left: .18rem;

                    .userInfo {
                        padding-top: .03rem;
                        padding-left: .02rem;

                        img.vip {
                            width: .3rem;
                            vertical-align: middle;
                        }

                        img:not(:first-child) {
                            height: .18rem;
                            vertical-align: middle;
                        }
                    }

                    div.userName {
                        img {
                            width: .42rem;
                            height: .42rem;
                            border-radius: 50%;
                            vertical-align: middle;
                        }

                        span {
                            vertical-align: middle;
                            color: #fff;
                            font-size: .24rem;
                            font-weight: bold;
                            margin-left: .1rem;
                        }
                    }
                }
            }
        }

        #mask {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, .3);
            z-index: 1000;
        }
    }
</style>
