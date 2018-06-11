<template>
  <span id="top">
    <div class="container container--app">
      <HomeView class="app--home" />
      <InfoView id="info"
                class="app-info" />
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
      if (window.outerWidth > 768) {
        this.loading ? this.$scrollTo('#top') : this.$scrollTo('#info')
      } else {
        this.loading
          ? this.$scrollTo('#top', 500, { offset: 150 })
          : this.$scrollTo('#info', 500)
      }
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

