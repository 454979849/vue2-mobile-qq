<template>
    <div class="dialog">
        <div class="currentFriend">

        </div>
    </div>
</template>

<script>
    export default {
        name: "dialog",
        computed:{
            message(){
                return this.$store.state.friend.currentMessage
            }
        }
    }
</script>

<style scoped lang="scss">
    .dialog{
        width: 100%;
        height: 100%;
        background:#ecedf0;
        .currentFriend{
            height:.6rem;
            background:#ededf2;
        }
    }
</style>