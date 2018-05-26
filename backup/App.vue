<template>
  <div id="app">
    <HomeView />
    <AnalyticsView />
    <SnackbarPopup v-if="error">{{ $route.params.username }} does not exist</SnackbarPopup>
    <span id="bottom" />
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import SnackbarPopup from './components/utility/SnackbarPopup'
import HomeView from './views/HomeView'
import AnalyticsView from './views/AnalyticsView'

export default {
  name: 'App',
  components: {
    HomeView,
    AnalyticsView,
    SnackbarPopup,
  },
  data() {
    return {
      error: false,
    }
  },
  watch: {
    $route() {
      const username = this.$route.params.username
      if (username) this.setUser(username)
      else this.clearUser()
    },
  },
  mounted() {
    const username = this.$route.params.username
    this.setUser(username)
  },
  methods: {
    setUser(username) {
      Cookies.getJSON(username)
        ? this.setUserByCookies(username)
        : this.setUserByAPICall(username)
    },
    clearUser() {
      this.$store.dispatch('clearUser').then(() => this.$scrollTo('#app', 500))
    },
    setUserByCookies(username) {
      this.$store
        .dispatch('setUserByCookies', username)
        .then(() => this.$scrollTo('#bottom', 500))
    },
    setUserByAPICall(username) {
      this.$store
        .dispatch('setUserByAPICall', username)
        .then(() => this.$scrollTo('#bottom', 500))
        .catch(() => {
          this.error = true
          setTimeout(() => (this.error = false), 3000)
        })
    },
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
