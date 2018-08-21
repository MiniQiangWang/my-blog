<template>
  <div id="app">
    <mb-header></mb-header>
    <router-view/>
  </div>
</template>

<script>
    import mbHeader from '@/components/mbHeader';
    export default {
        name: 'App',
        components: {
            'mb-header': mbHeader
        },
    }
</script>

<style lang="scss">
  @import '../static/css/common.scss';

  
</style>
