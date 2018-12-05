<template>
    <div id="app">
        <div style="width:500px;height:100%;background:red;"></div>
        <keep-alive>
            <router-view v-transition />
        </keep-alive>
        <Foot v-if="showFoot"></Foot>
    </div>
</template>

<script>
    import Foot from '@/components/foot'
    export default {
        components:{Foot},
        computed:{
            showFoot(){
                return this.$store.state.app.showFoot;
            }
        }
    }
</script>