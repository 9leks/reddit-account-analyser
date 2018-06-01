<template>
  <div class="container container--home">

    <div class="container home--header container--center">
      <img src="@/static/img/logo.png">
    </div>

    <div class="container home--title container--center">
      <div class="text text--black text--shadow text--center">
        <span class="text--orange">reddit</span> account analyser
      </div>
    </div>

    <div class="container home--description container--center">
      <div class="text text--black text--shadow text--center">
        Get information on your data, recent activity and favorite subreddits
      </div>
    </div>

    <div class="container home--searchbar container--center">
      <Searchbar v-model="username"
                 @send="setUser(username)" />
    </div>

  </div>
</template>

<script>
import Cookies from 'js-cookie'

import Searchbar from './Home/Searchbar.vue'

export default {
  name: 'HomeView',
  components: { Searchbar },
  data() {
    return { username: '' }
  },
  methods: {
    setUser(username) {
      Cookies.getJSON(username)
        ? this.$store.dispatch('setUserByCookie', username)
        : this.$store
            .dispatch('setUserByAPICall', username)
            .catch(error => console.log(error)) // TODO: Add error handling
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
  font-weight: 200;
  font-size: 3rem;

  grid-area: title;
}

.home--description {
  margin-bottom: 2.5rem;
  font-weight: 300;
  font-size: 2rem;

  grid-area: description;
}

.home--searchbar {
  grid-area: searchbar;
}
</style>
