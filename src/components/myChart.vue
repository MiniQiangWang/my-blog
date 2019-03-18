<template>
    <div class="my-chart" ref="chart" id="main"></div>
</template>

<script>
    import echarts from 'echarts';

    export default {
        data () {
            return {
                option: {}
            }
        },
        methods: {

        },
        mounted() {
            let myChart = echarts.init(document.getElementById('main'));

            this.option = {
                
            }

            myChart.setOption(this.option);
        }
    }
</script>

<style>
    .my-chart {
        width: 100%;
        height: 1000px;
    }
</style>
