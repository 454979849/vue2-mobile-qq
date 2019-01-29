<template>
    <div class="myAudio">
        <div class="music">
            <img src="../assets/music/music.png" :class="['cd','playing',{'pause':!playing}]">
            <img class="btn" src="../assets/music/toplay.png" v-show="!playing" @click="play">
            <img class="btn" src="../assets/music/tostop.png" v-show="playing" @click="stop">
        </div>
    </div>
</template>
<script>
    export default {
        name: "myAudio",
        data() {
            return {
                playing: true,
            }
        },
        methods: {
            play() {
                document.getElementById('audio').play();
                this.playing = true;
            },
            stop() {
                document.getElementById('audio').pause();
                this.playing = false;
            }
        }
    }
</script>
<style lang="scss" scoped>
    @keyframes rotate {
        0% {
            transform: rotate(0)
        }
        100% {
            transform: rotate(360deg)
        }
    }

    .myAudio {
        padding-top: .2rem;
        padding-bottom:.2rem;
        .cd {
            &.playing {
                animation: rotate 20s linear infinite;

                &.pause {
                    animation-play-state: paused;
                }
            }
        }
        .music {
            text-align: center;
            position: relative;
            img:first-child {
                width: 50%;
                border-radius: 50%;
            }
            .btn {
                width: .5rem;
                height: .5rem;
                position: absolute;
                top: 50%;
                left: 50%;
                border-radius: 50%;
                transform: translateX(-50%) translateY(-50%);
                background:rgba(0,0,0,.3);
            }
        }
    }
</style>
