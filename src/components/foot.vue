<template>
    <div class="foot">
        <ul>
            <li @click="pageChange(0)">
                <img :src="footIndex==0?imgActive1:img1" >
                <p :class="{active:footIndex==0}">消息</p>
            </li>
            <li @click="pageChange(1)">
                <img :src="footIndex==1?imgActive2:img2" >
                <p :class="{active:footIndex==1}">联系人</p>
            </li>
            <li @click="pageChange(2)">
                <img :src="footIndex==2?imgActive3:img3" >
                <p :class="{active:footIndex==2}">动态</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "foot",
        computed:{
            ...mapGetters(['userInfo','footIndex'])
        },
        methods:{
            pageChange(index){
                if(index==this.footIndex){
                    return ;
                }
                sessionStorage.setItem('_footIndex',index);
                this.$store.commit('SET_FOOT_INDEX',index);
                if(index==0) this.$router.push(`/message/${this.userInfo.id}`)
                else if(index==1) this.$router.push(`/friend/${this.userInfo.id}`)
                else if(index==2) this.$router.push(`/dynamic/${this.userInfo.id}`)
            }
        },
        data(){
            return {
                img1:'http://120.79.192.193/assets/f1.png',
                imgActive1:'http://120.79.192.193/assets/f1_active.png',
                img2:'http://120.79.192.193/assets/f2.png',
                imgActive2:'http://120.79.192.193/assets/f2_active.png',
                img3:'http://120.79.192.193/assets/f3.png',
                imgActive3:'http://120.79.192.193/assets/f3_active.png',
            }
        }
    }
</script>

<style scoped lang="scss">
    .foot {
        background:#fff;
        z-index:500;
        height: .54rem;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        border-top: .01rem solid #eee;
        ul{
            width:100%;
            height:100%;
            display:flex;
            align-items:center;
            li{
                flex:1;
                text-align:center;
                img{
                    height:.25rem;
                }
                p{
                    font-size:.12rem;
                    margin-top:.03rem;
                    color:#89888d;
                    &.active{
                        color:#66B7F7;
                    }
                }
            }
        }
    }
</style>