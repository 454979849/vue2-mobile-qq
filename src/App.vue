<template>
    <div id="app">
        <router-view v-transition />
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