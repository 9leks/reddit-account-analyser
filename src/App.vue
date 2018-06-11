<template>
  <div>
    <span id="top" />
    <div class="container container--app">
      <HomeView class="app--home" />
      <InfoView id="info"
                class="app-info" />
    </div>
  </div>
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
      this.loading ? this.$scrollTo('#top') : this.$scrollTo('#info')
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

