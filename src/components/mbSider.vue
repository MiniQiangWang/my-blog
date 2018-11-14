<template>
    <div class="sider">
        <ul class="list">
            <li class='list-item' v-for="item in titleList">
                <span v-text="item"></span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                titleList: [
                    'jjjjjjjj',
                    'dafognng',
                    '啊价格和爸爸了',
                    '爱哦如何起哄'
                ]
            }
        }
    }
</script>

<style scoped>
    .sider {
        width: 400px;
        height: 300px;
        font-size: 20px;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 10px;
        text-align: center;
    }
    .list {
        width: 100%;
        height: 100%;
    }
    .list-item {
        height: 50px;
        line-height: 50px;
    }
</style>
