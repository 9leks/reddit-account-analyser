<template>
  <div class="container--app">
    <search-page />
  </div>
</template>

<script>
import SearchPage from './components/pages/SearchPage'
import DataPage from './components/pages/DataPage'
import ActivityPage from './components/pages/ActivityPage'
import GraphsPage from './components/pages/GraphsPage'

export default {
  components: {
    SearchPage,
    DataPage,
    ActivityPage,
    GraphsPage,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400');

* {
  font-family: 'Poppins', sans-serif;
}
</style>

<style lang="scss" scoped>
.container--app {
  display: grid;
}
</style>

