<template>
    <div class="article-box">
        <div class="article-head"></div>
        <div class="article-title" v-text="title"></div>
    </div>
</template>

<script>
    export default {
        props: [
            'title'
        ],
        data () {
            return {

            }
        }
    }
</script>

<style>
    .article-box {
        display: inline-block;
        width: 250px;
        height: 350px;
        margin: 20px;
        border: 1px solid #ccc;
        border-bottom-right-radius: 30px;
        border-top-left-radius: 30px;
        overflow: hidden;
    }
    .article-head {
        width: 100%;
        height: 250px;
        background: lightblue;
    }
    .article-title {
        width: 100%;
        height: 100px;
        font-size: 20px;
        line-height: 100px;
    }
</style>
