<template>
  <div class="container container--home">

    <div class="container home--header container--center">
      <img src="@/assets/img/logo.png">
    </div>

    <div class="home--title">
      <div class="text--black text--shadow text--center">
        <span class="text--orange">reddit</span> account analyser
      </div>
    </div>

    <div class="home--description">
      <div class="text--black text--shadow text--center">
        Get information on your data, recent activity and favorite subreddits
      </div>
    </div>

    <div class="home--searchbar">
      <Searchbar />
    </div>

    <div class="home--github">
      <a href="https://github.com/alexjondiaz/reddit-analyser/"
         target="_blank">
        <img src="@/assets/img/github.png">

      </a>
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
  justify-content: center;
  padding: 0 0.5rem;

  grid-area: searchbar;
}

.home--github {
  text-align: center;
  opacity: 0.75;
  transition: opacity 0.1s ease-in-out;

  &:hover {
    opacity: 1;
  }
}
</style>
