<template>
  <div class="app">
    <header>
      <h1 class="title">{{ title }}</h1>
      <nav>
        <ul>
          <li>
            <router-link :to="{name: 'Home' }">Home</router-link>
          </li>
          <li>
            <router-link :to="{name: 'About' }">About</router-link>
          </li>
        </ul>
      </nav>
    </header>

    <router-view></router-view>
    
    <footer>
      Made with love by David.
    </footer>
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
  .app {
    padding: 0 10px;
    @media (--tablet) {
      width: 80%;
      margin: 0 auto;
    }
    @media (--desktop) {
      width: 1024px;
    }
    @media (--large-desktop) {
      width: 1190px;
    }
  }
  .title {
    text-align: center;
  }
</style>