<template>
    <div class="home-body">
        <transition name="head">
            <mb-header class="head" v-show="headerShow"></mb-header>
        </transition>
        <transition name="home">
            <div class="home" v-show="groundShow" :style="viewSize"></div>
        </transition>
        <transition name="sider">
            <mb-sider class="sider" v-show="siderShow"></mb-sider>
        </transition>
        <div class="skill-wrap" :style="viewSize">
            <mb-skill class="skill"></mb-skill>
        </div>
        <div class="go-top" ref="top" @click="toTop"></div>
        <my-chart></my-chart>
        
    </div>
</template>

<script>
    import mbHeader from '@/components/mbHeader';
    import mbSider from '@/components/mbSider';
    import mbSkill from '@/components/mbSkill';
    import myChart from '@/components/myChart';
    export default {
        components: {
            mbHeader,
            mbSider,
            mbSkill,
            myChart
        },
        data () {
            return {
                homePage: {
                    backgroundImage: "url(" + require("../../static/images/back_page.jpg") + ")",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                },
                groundShow: true,
                headerShow:true,
                siderShow:true,         
                viewSize:{
                    // width: 0,
                    height: 0
                }
            }
        },
        beforeCreate() {
            
        },
        created() {
            this.viewSize = {
                'height': window.innerHeight+'px'
            }
        },
        beforeMount() {
            this.groundShow = false;
            this.headerShow = false;
            this.siderShow = false;
            
        },
        mounted() {
            this.groundShow = true;
            setTimeout(()=>{
                this.headerShow = true;
                this.siderShow = true;
            }, 1500);
        },
        methods: {
            toTop() {
                document.documentElement.scrollTop = 0;
            }
        }
    }
</script>

<style scoped>
    html, body {
        width: 100%;
    }
    .head-enter-active {
        transition: all 1s;
        transform: translate3d(0, 0, 0);
    }
    .head-enter {
        transform: translate3d(0, -100%, 0);
    }
    .home {
        position: relative;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: url(../../static/images/back_page.jpg);
        background-size: auto 100%;
        z-index: 0;
    }

    .home-enter-active {
        transition: all 2s;
        opacity: 1;
    }
    .home-enter {
        opacity: 0;
    }
    .sider {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        z-index:10;
    }
    .sider-enter-active {
        transition: all 2s;
        opacity: 1;
    }
    .sider-enter {
        opacity: 0;
    }
    .skill-wrap {
        position: relative;
        width: 100%;
    }
    /* .fold-enter-to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    } */
    .go-top {
        position: fixed;
        bottom: 300px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: url('../../static/icons/to_top.png');
        background-size: 100% 100%;
    }
</style>
