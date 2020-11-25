<template>
  <div id="app">
    <walk-dog></walk-dog>
  </div>
</template>

<script>
import walkDog from './components/walkDog.vue';

export default {
  name: 'App',
  components: {
    walkDog,
  },
};
</script>

<style lang="scss">
@import "./assets/all.scss";

#app {
  font-family: Century Gothic,Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
