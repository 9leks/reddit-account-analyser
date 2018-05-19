<template>
  <div>
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
</style>
