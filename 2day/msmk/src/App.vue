<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>我想好好学习</h1>
    <span class="icon-my"></span>
    <span class="icon-My-Music"></span>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
