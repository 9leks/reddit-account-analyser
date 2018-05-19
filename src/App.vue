<template>
  <div class="app">
    <HomeView />
    <AnalyticsView />
  </div>
</template>

<script>
import HomeView from './components/HomeView'
import AnalyticsView from './components/AnalyticsView'

export default {
  name: 'App',
  components: {
    HomeView,
    AnalyticsView,
  },
}
</script>

<style lang="scss">
@import './grid.scss';
@import url('https://fonts.googleapis.com/css?family=Slabo+27px|Source+Sans+Pro:300');
</style>
