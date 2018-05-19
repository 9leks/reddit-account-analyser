<template>
  <div class="home">
    <div class="container fluid">

      <div class="row center">
        <div class="logo-item">
          <img src="@/assets/img/snoo.png"
               height="150"
               width="150">
        </div>
      </div>

      <div class="row center">
        <h2 class="header">Analyse a reddit account</h2>
      </div>

      <div class="row center">
        <div class="search-form">
          <SearchForm />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import SearchForm from './HomeView/SearchForm'

export default {
  name: 'HomeView',
  components: { SearchForm },
  methods: {
    console() {
      console.log('hi')
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  background: white;
  font-family: 'Slabo 27px', serif;
  background: linear-gradient(
    135deg,
    rgb(11, 114, 155) 10%,
    rgb(14, 178, 184) 90%
  );
}

.logo-item {
  display: inline-block;
  margin-bottom: 0.2em;
  filter: drop-shadow(0 0 10px rgba(49, 49, 49, 0.459));
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: rotate(35deg);
  }
}

.header {
  color: rgb(219, 219, 219);
  font-size: 3em;
  text-shadow: 0 0 10px rgba(41, 41, 41, 0.61);
}

.search-form {
  margin-bottom: 1.5em;
}
</style>

