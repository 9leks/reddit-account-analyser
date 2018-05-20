<template>
  <div id="app">
    <HomeView />
    <AnalyticsView />
    <span id="bottom" />
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
  watch: {
    $route() {
      if (this.$route.params.user) {
        if (JSON.parse(localStorage.getItem(this.$route.params.user))) {
          this.$store.dispatch('setUserByLocalStorage', this.$route.params.user)
        } else if (this.$route.params.user) {
          this.$store.dispatch('setUser', this.$route.params.user)
        }
        this.$scrollTo('#bottom', 400)
      } else {
        this.$store.dispatch('clearUser')
        this.$scrollTo('#app', 400)
      }
    },
  },
  mounted() {
    if (this.$route.params.user) {
      if (JSON.parse(localStorage.getItem(this.$route.params.user))) {
        this.$store.dispatch('setUserByLocalStorage', this.$route.params.user)
      } else if (this.$route.params.user) {
        this.$store.dispatch('setUser', this.$route.params.user)
      }
      this.$scrollTo('#bottom', 400)
    }
  },
}
</script>

<style lang="scss">
@import './grid.scss';
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,500,700');

* {
  font-family: 'Open Sans Condensed';
}

#app {
  overflow-y: hidden;
  height: 150vh;
  background: linear-gradient(
    40deg,
    rgba(13, 109, 187, 0.699) 0%,
    rgba(29, 147, 151, 0.795) 40%,
    rgba(42, 158, 236, 0.658) 90%
  );
  background-attachment: fixed;
}

#bottom {
  position: fixed;
  bottom: 0;
}
</style>
