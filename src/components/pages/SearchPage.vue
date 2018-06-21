<template>
  <div class="container--search">
    <img src="@/assets/logo.png" alt="logo" class="search--logo">
    <div class="search--header header--main">
      <span class="orange">reddit</span> account analyser
    </div>
    <div class="search--header header--subtitle">
      get information on your data, activity and favorite subreddits
    </div>
    <app-searchbar class="search--searchbar" @submit="handleSubmit" />
    <a href="https://github.com/alexjondiaz/reddit-account-analyser" 
       target="_blank" 
       class="search--github">
      <img src="@/assets/github.png" alt="github">
    </a>
  </div>
</template>

<script>
import AppSearchbar from '../AppSearchbar'

export default {
  name: 'SearchPage',
  components: {
    AppSearchbar,
  },
  methods: {
    handleSubmit(value) {
      this.$emit('submit', value)
    },
  },
}
</script>

<style lang="scss" scoped>
.container--search {
  display: grid;
  padding: 0.25rem;

  grid-gap: 2rem;
  grid-template-rows: 0fr 0.25fr 1.25fr 1fr 0fr 0.5fr 1fr;
  grid-template-areas:
    '.'
    'logo'
    'header'
    'subtitle'
    'searchbar'
    '.'
    'github';
}

.search--logo {
  filter: drop-shadow(0 3px 1.5px rgba(0, 0, 0, 0.5));

  grid-area: logo;
  justify-self: center;
}

.search--header {
  text-align: center;
  filter: drop-shadow(0 2px 1.5px rgba(0, 0, 0, 0.25));
}

.header--main {
  font-weight: 400;
  font-size: 3rem;

  grid-area: header;
}

.header--subtitle {
  font-weight: 200;
  font-size: 2rem;

  grid-area: subtitle;
}

.search--searchbar {
  width: 75%;
  height: 125%;
  filter: drop-shadow(0 3px 1.5px rgba(0, 0, 0, 0.5));

  grid-area: searchbar;
  justify-self: center;
}

.search--github {
  height: 0;
  transition: filter 0.25s;

  grid-area: github;
  justify-self: center;

  &:hover {
    filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.5));
  }
}

.orange {
  color: rgb(255, 120, 60);
}

@media screen and (min-width: 375px) {
  .container--search {
    grid-template-rows: 0.25fr 1fr 1.25fr 1.5fr 0fr 0.5fr 1fr;
  }
}
</style>
