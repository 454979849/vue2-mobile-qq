<template>
    <ul class="publicSubList">
        <li v-for="(item,index) in subList">
            <div class="l">
                <img :src="item.imgSrc" >
            </div>
            <div class="r">
                {{item.name}}
            </div>
        </li>

    </ul>
</template>

<script>
    export default {
        name: "publicSubList",
        props:['subList']
    }
</script>
<style scoped lang="scss">
.publicSubList{
    li{
        height:.56rem;
        background:#fff;
        padding-left:.12rem;
        display:flex;
        align-items: center;
        &:not(:first-child){
            border-top:.01rem solid #eee;
        }
        .l{
            img{
                width:.3rem;
                height:auto;
                border-radius:.15rem;
            }
        }
        .r{
            font-size:.16rem;
            color:#000;
            margin-left:.15rem;
        }
    }
}
</style>