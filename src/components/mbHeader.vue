<template>
    <header>
        <div class="mb-logo"></div>
        <div class="mb-title" v-text="title"></div>
    </header>
</template>

<script>
    export default {
        data () {
            return {
                data: [],
                title: '唉呀妈呀脑瓜疼'
            }
        }
    }
</script>

<style scoped>
    header {
        position: fixed;
        width: 100%;
        height: 60px;
        color: #fff;
        border: 1px solid #fff;
        z-index: 9999;
        background: rgba(255, 255, 255, .3);
        text-align: center;
    }
    .mb-title {
        display: inline-block;
        font-size: 25px;
        line-height: 60px;
    }
</style>

