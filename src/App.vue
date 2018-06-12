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
import HomeView from './components/HomeView'
import InfoView from './components/InfoView'

export default {
  name: 'App',
  components: { HomeView, InfoView },
  methods: {
    setUser(username) {
      if (username) {
        this.$scrollTo('#top', 500)
        this.$store.dispatch('setLoadingState', true)
        this.$refs.home.$el.children[3].children[0].children[1].blur()

        setTimeout(async () => {
          try {
            await this.storeUser(username)
          } catch (error) {
            this.catchError(username)
          }
        })
      }
    },

    async storeUser(username) {
      await this.$store.dispatch('setUser', username)
      this.$scrollTo('#info', 500)
      this.$store.dispatch('setLoadingState', false)
    },

    catchError(username) {
      this.$store.dispatch('setUser')
      setTimeout(() => {
        this.$store.dispatch('setLoadingState', false)
        this.$toasted.error(`${username} does not exist!`, {
          theme: 'bubble',
          position: 'bottom-center',
          duration: 3500,
        })
      }, 500)
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

