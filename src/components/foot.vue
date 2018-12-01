<template>
    <div class="foot">
        <ul>
            <li @click="pageChange(0)">
                <img :src="index==0?imgActive1:img1" >
                <p :class="{active:index==0}">消息</p>
            </li>
            <li @click="pageChange(1)">
                <img :src="index==1?imgActive2:img2" >
                <p :class="{active:index==1}">联系人</p>
            </li>
            <li @click="pageChange(2)">
                <img :src="index==2?imgActive3:img3" >
                <p :class="{active:index==2}">动态</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "foot",
        computed:{
            ...mapGetters(['userId'])
        },
        methods:{
            pageChange(index){
                if(index==this.index){
                    return ;
                }
                this.index=index;
                if(index==0) this.$router.push(`/message/${this.userId}`)
                else if(index==1) this.$router.push(`/friend/${this.userId}`)
            }
        },
        data(){
            return {
                index:0,
                img1:require('../assets/f1.png'),
                imgActive1:require('../assets/f1_active.png'),
                img2:require('../assets/f2.png'),
                imgActive2:require('../assets/f2_active.png'),
                img3:require('../assets/f3.png'),
                imgActive3:require('../assets/f3_active.png'),
            }
        }
    }
</script>

<style scoped lang="scss">
    .foot {
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