<template>
  <span id="top">
    <div class="container container--app">
      <HomeView class="app--home" />

      <transition name="fade">
        <div v-if="loading">
          <div class="spinner" />
        </div>
      </transition>

      <span id="info" />
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
      this.loading ? this.$scrollTo('#top', 500) : this.$scrollTo('#info', 700)
    },
  },
}
</script>

<style lang="scss" scoped>
.container--app {
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

