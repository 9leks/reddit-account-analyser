<template lang="pug">
  div.container
    HomeView
    AnalyticsView
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

<style lang="sass">
.container 
  display: flex
  justify-content: center
  padding: 1rem

</style>
