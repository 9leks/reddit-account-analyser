<template>
  <div class="container--search">
    <img src="@/assets/logo.png" alt="logo" class="search--logo">
    <h1 class="search--header header--main">
      <span class="orange">reddit</span> account analyser
    </h1>
    <h2 class="search--header header--subtitle">
      get information on your data, activity and favorite subreddits
    </h2>
    <search-searchbar class="search--searchbar" @submit="onSubmit" />
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
    onSubmit(value) {
      console.log(value)
    },
  },
}
</script>

<style scoped>
.container--search {
  display: grid;
}

.search--logo {
  margin-top: 5rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 3px 1.5px rgba(0, 0, 0, 0.5));

  justify-self: center;
}

.search--header {
  padding: 1rem;
  text-align: center;
  font-weight: 300;
  filter: drop-shadow(0 2px 1.5px rgba(0, 0, 0, 0.25));
}

.header--main {
  margin-bottom: 1rem;
  font-size: 4rem;
}

.orange {
  color: rgb(255, 120, 60);
}

.header--subtitle {
  margin-bottom: 4rem;
  font-size: 3rem;
}

.search--searchbar {
  width: 75%;
  height: 150%;
  filter: drop-shadow(0 3px 1.5px rgba(0, 0, 0, 0.5));

  justify-self: center;
}
</style>
