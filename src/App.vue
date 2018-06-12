<template>
  <div>
    <span id="top" />
    <div class="container container--app">
      <HomeView ref="home"
                class="app--home"
                @set-user="setUser" />
      <InfoView id="info"
                class="app-info" />
    </div>
  </div>
</template>

<script>
import { isValidUsername } from './reddit.js'
import HomeView from './components/HomeView'
import InfoView from './components/InfoView'

export default {
  name: 'App',
  components: { HomeView, InfoView },
  watch: {
    '$route.params.username'() {
      this.$scrollTo('#top', 500)
      const username = this.$route.params.username
      username
        ? this.storeUser(username)
        : this.$store.dispatch('clearUser')
    },
  },

  mounted() {
    const username = this.$route.params.username
    if (username) this.storeUser(username)
  },

  methods: {
    async setUser(username) {
      const searchbar = this.$refs.home.$el.children[3].children[0].children[1]
      if (await isValidUsername(username)) {
        searchbar.blur()
        this.$router.push(`/${username}`)
      } else {
        this.showErrorNotification(username)
      }
    },

    async storeUser(username) {
      this.$store.dispatch('setLoadingState', true)
      try {
        await this.$store.dispatch('setUser', username)
        this.$store.dispatch('setLoadingState', false)
        this.$scrollTo('#info', 700)
      } catch (error) {
        this.$store.dispatch('clearUser')
        this.showErrorNotification(username)
        setTimeout(() => this.$store.dispatch('setLoadingState', false), 500)
      }
    },

    showErrorNotification(username) {
      if (username) {
        this.$toasted.error(`${username} does not exist!`, {
          theme: 'bubble',
          position: 'bottom-center',
          duration: 2500,
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.container--app {
  grid-gap: 10rem;
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

