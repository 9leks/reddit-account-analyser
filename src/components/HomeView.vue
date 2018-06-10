<template>
  <div id="top"
       class="container container--home">

    <div class="container home--header container--center">
      <img src="@/assets/img/logo.png">
    </div>

    <div class="home--title container--center">
      <div class="text--black text--shadow text--center">
        <span class="text--orange">reddit</span> account analyser
      </div>
    </div>

    <div class="home--description container--center">
      <div class="text--black text--shadow text--center">
        Get information on your data, recent activity and favorite subreddits
      </div>
    </div>

    <div class="home--searchbar container--center">
      <Searchbar v-model="username"
                 @send="setUser(username)" />
    </div>

  </div>
</template>

<script>
import Searchbar from './Home/Searchbar.vue'

export default {
  name: 'HomeView',
  components: { Searchbar },
  data() {
    return { username: '' }
  },
  methods: {
    setUser(username) {
      if (username) {
        this.$store.dispatch('setLoadingState', false)
        setTimeout(() => {
          this.$store.dispatch('setUser', username).catch(error => {
            alert('User does not exist.')
            throw error
          })
        }, 500)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.container--home {
  grid-template-areas:
    'header'
    'title'
    'description'
    'searchbar';
  grid-gap: 3rem;
}

.home--header {
  @include header;
  grid-area: header;
}

.home--title {
  padding: 1rem;
  padding: 0 0.5rem;
  font-weight: 200;
  font-size: 3rem;

  grid-area: title;
}

.home--description {
  margin-bottom: 2.5rem;
  padding: 0 0.5rem;
  font-weight: 300;
  font-size: 2rem;

  grid-area: description;
}

.home--searchbar {
  padding: 0 0.5rem;

  grid-area: searchbar;
}
</style>
