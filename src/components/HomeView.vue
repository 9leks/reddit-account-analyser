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
      <Searchbar />
    </div>

  </div>
</template>

<script>
import Searchbar from './Home/Searchbar.vue'

export default {
  name: 'HomeView',
  components: { Searchbar },
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
