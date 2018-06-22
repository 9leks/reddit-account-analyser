<template>
  <div class="container">
    <img src="@/assets/logo.png"
         alt="logo"
         class="logo">
    <div class="header title">
      <span class="orange">reddit</span> account analyser
      <a href="https://github.com/alexjondiaz/reddit-account-analyser"
         target="_blank"
         class="github">
        <img src="@/assets/github.png"
             class="github-icon"
             alt="github">
      </a>
    </div>
    <div class="header subtitle">
      get information on your data, activity and favorite subreddits
    </div>
    <app-searchbar class="searchbar"
                   @submit="handleSubmit" />
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
.container {
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
    '.';
}

.logo {
  filter: drop-shadow(0 3px 1.5px rgba(0, 0, 0, 0.5));

  grid-area: logo;
  justify-self: center;
}

.header {
  text-align: center;
  filter: drop-shadow(0 2px 1.5px rgba(0, 0, 0, 0.25));
}

.title {
  font-weight: 400;
  font-size: 3rem;

  grid-area: header;
}

.subtitle {
  font-weight: 200;
  font-size: 2rem;

  grid-area: subtitle;
}

.searchbar {
  width: 75%;
  height: 125%;
  filter: drop-shadow(0 3px 1.5px rgba(0, 0, 0, 0.5));

  grid-area: searchbar;
  justify-self: center;
}

.github {
  transition: filter 0.25s;

  &:hover {
    filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.5));
  }
}

.github-icon {
  width: 30px;
  height: 30px;
}

.orange {
  color: rgb(255, 120, 60);
}

@media screen and (min-width: 375px) {
  .container {
    grid-template-rows: 0.25fr 1fr 1.25fr 1.5fr 0fr 0.5fr 1fr;
  }
}
</style>
