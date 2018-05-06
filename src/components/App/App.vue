<template>
  <div class="app">
    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        title: 'Welcome to my starter !'
      }
    }
  }
</script>

<style>
  html {
    font-family: Arial, Helvetica, sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
  }
  .title {
    text-align: center;
    @media (--tablet) {}
  }
</style>