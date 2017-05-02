<script>
  export default {
    name: 'app'
  }
</script>

<template>  
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
    body {
      padding-left: 200px;
    }
    @media only screen and (max-width : 992px) {
      body {
        padding-left: 0;
      }
    }
</style>
