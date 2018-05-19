<template>
  <div class="home">
    <div class="container fluid">

      <div class="row center">
        <div class="logo">
          <img src="@/assets/img/snoo.png"
               height="150"
               width="150">
        </div>
      </div>

      <div class="row center">
        <div class="header">
          <h2>Analyse a reddit account</h2>
        </div>
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
}
</script>

<style lang="scss" scoped>
.home {
  background: linear-gradient(
      120deg,
      rgba(14, 137, 153, 0.8) 10%,
      rgba(12, 28, 119, 0.486) 80%
    ),
    linear-gradient(
      330deg,
      rgba(53, 29, 85, 0.603) 50%,
      rgba(23, 23, 97, 0.699) 90%
    );
}

.logo {
  margin-bottom: 0.2em;
  filter: drop-shadow(0 0 10px rgba(49, 49, 49, 0.459));
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: rotate(35deg);
  }
}

.header {
  font-size: 2em;
  filter: drop-shadow(-10px -10px 30px rgba(41, 41, 41, 0.658));
}

.search-form {
  margin-bottom: 1.5em;
  filter: drop-shadow(0 0 50px rgba(25, 130, 172, 0.288));
}
</style>

