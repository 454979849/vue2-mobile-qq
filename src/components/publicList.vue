<template>
    <div class="publicList">
        <div class="publicItem" v-for="(item,index) in publicList">
            <div class="letter">
                {{item.letter}}
            </div>
            <PublicSubList :subList="item.subList"></PublicSubList>
        </div>
    </div>
</template>

<script>
    import PublicSubList from './publicSubList'
    export default {
        name: "publicList",
        components:{PublicSubList},
        props:['publicList']
    }
</script>
<style scoped lang="scss">
.publicItem{
    .letter{
        height:.3rem;
        background:#f7f7f7;
        color:#777;
        line-height:.3rem;
        padding-left:.12rem;
        font-size:.12rem;
    }
}
</style>