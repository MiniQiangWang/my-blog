<template>
    <div class="home-body">
        <transition name="head">
            <mb-header class="head" v-show="headerShow"></mb-header>
        </transition>
        <transition name="home">
            <div class="home" v-show="groundShow"></div>
        </transition>
        
    </div>
    
    
</template>

<script>
    // import mbSider from '@/components/mbSider';
    import mbHeader from '@/components/mbHeader';
    export default {
        components: {
            'mb-header': mbHeader
        },
        data () {
            return {
                homePage: {
                    backgroundImage: "url(" + require("../../static/images/back_page.jpg") + ")",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                },
                groundShow: true,
                headerShow:true
            }
        },
        created() {

        },
        beforeMount() {
            this.groundShow = false;
            this.headerShow = false;
        },
        mounted() {
            this.groundShow = true;
            setTimeout(()=>{
                this.headerShow = true;
            }, 1500);
        },
        methods: {
            
        }
    }
</script>

<style scoped>

    .head-enter-active {
        transition: all 2s;
        transform: translate3d(0, 0, 0);
    }
    .head-enter {
        transform: translate3d(0, -100%, 0);
    }
    .home {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: url(../../static/images/back_page.jpg);
        background-size: auto 100%;
    }

    .home-enter-active {
        transition: all 2s;
        opacity: 1;
    }
    .home-enter {
        opacity: 0;
    }
    /* .fold-enter-to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    } */
</style>
