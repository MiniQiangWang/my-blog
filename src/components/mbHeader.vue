<template>
    <header>
        <div class="mb-logo"></div>
        <div class="mb-title">This me!</div>
    </header>
</template>

<script>
    export default {
        data () {
            return {
                data: [],
                author: '豆子的博客'
            }
        }
    }
</script>

<style scoped>
    header {
        position: fixed;
        width: 100%;
        height: 60px;
        border: 1px solid #fff;
        z-index: 9999;
    }
</style>

