<template>
    <div class="message">
        <mHead pageType="message"></mHead>
        <MessageList></MessageList>
    </div>
</template>

<script>
    import MessageList from '@/components/messageList'
    import mHead from '@/components/head'
    import {Indicator, Search} from 'mint-ui';

    export default {
        name: "message",
        components:{MessageList,mHead},
        data() {
            return {
                searchWords: '',
            }
        },
        mounted() {
            this.$store.commit('SHOW_FOOT_CHANGE', true);
        }
    }
</script>

<style scoped lang="scss">
    .message {
        width: 100%;
        height: 100%;
    }
</style>