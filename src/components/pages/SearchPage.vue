<template>
  <div class="container--search">
    <img src="@/assets/logo.png" alt="logo" class="search--logo">
    <div class="search--header header--main">
      <span class="orange">reddit</span> account analyser
    </div>
    <div class="search--header header--subtitle">
      get information on your data, activity and favorite subreddits
    </div>
    <search-searchbar class="search--searchbar" @submit="handleSubmit" />
  </div>
</template>

<script>
import searchSearchbar from '../AppSearchbar'

export default {
  name: 'SearchPage',
  components: {
    searchSearchbar,
  },
  methods: {
    handleSubmit(value) {
      this.$emit('submit', value)
    },
  },
}
</script>

<style scoped>
.container--search {
  display: grid;
}

.search--logo {
  margin-top: 7.5rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 3px 1.5px rgba(0, 0, 0, 0.5));

  justify-self: center;
}

.search--header {
  padding: 1rem;
  text-align: center;
  filter: drop-shadow(0 2px 1.5px rgba(0, 0, 0, 0.25));
}

.header--main {
  margin-bottom: 0.25rem;
  font-weight: 400;
  font-size: 3rem;
}

.orange {
  color: rgb(255, 120, 60);
}

.header--subtitle {
  margin-bottom: 4rem;
  font-weight: 200;
  font-size: 2rem;
}

.search--searchbar {
  width: 75%;
  height: 125%;
  filter: drop-shadow(0 3px 1.5px rgba(0, 0, 0, 0.5));

  justify-self: center;
}
</style>
