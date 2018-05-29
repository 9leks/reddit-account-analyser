<template>
  <div class="container container--app">
    <HomeView class="app--home" />
    <!-- <InfoView class="app-info" /> -->
  </div>
</template>

<script>
import HomeView from './components/HomeView'
import InfoView from './components/InfoView'

export default {
  name: 'App',
  components: { HomeView, InfoView },
}
</script>

<style lang="scss" scoped>
@import './static/scss/global';

.container--app {
  grid-template-areas:
    'home'
    'info';
}

.app--home {
  grid-area: home;
}

.app--info {
  grid-area: info;
}
</style>

