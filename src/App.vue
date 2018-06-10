<template>
  <span id="top">
    <div class="container container--app">
      <HomeView class="app--home" />
      <InfoView class="app-info" />
    </div>
  </span>
</template>

<script>
import { mapState } from 'vuex'

import HomeView from './components/HomeView'
import InfoView from './components/InfoView'

export default {
  name: 'App',
  components: { HomeView, InfoView },
  computed: {
    ...mapState({
      loading: state => state.utils.loading,
    }),
  },
  watch: {
    loading() {
      this.$scrollTo('#top')
    },
  },
}
</script>

<style lang="scss" scoped>
.container--app {
  font-family: 'Poppins', sans-serif;

  grid-gap: 5rem;
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

