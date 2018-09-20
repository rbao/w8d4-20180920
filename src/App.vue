<template>
  <div id="app">
    <h1>Welcome to TinyApp</h1>

    <router-link :to="{name: 'UrlList'}">View all urls</router-link>
    <br/>
    <router-link :to="{name: 'HelloWorld'}">HelloWorld</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
