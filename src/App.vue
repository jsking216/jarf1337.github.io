<template>
  <CookieInfo />
  <WeatherInfo />
</template>

<script>
import CookieInfo from './components/CookieInfo.vue';
import WeatherInfo from './components/WeatherInfo.vue';

export default {
  name: 'App',
  components: {
    CookieInfo,
    WeatherInfo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
