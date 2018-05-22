<template>
  <div class="home">
    <div class="container vertical center fluid">

      <div class="logo-item">
        <img src="@/assets/img/snoo.png"
             height="150"
             width="150">
      </div>

      <div class="header">
        <h2>Analyse a reddit account</h2>
      </div>

      <div class="search-form">
        <SearchForm @error="createPopup($store.state.input)" />
      </div>

    </div>

    <SnackbarPopup v-if="error">{{ username }} is not a valid username!</SnackbarPopup>
  </div>
</template>

<script>
import SearchForm from './HomeView/SearchForm'
import SnackbarPopup from '@/components/SnackbarPopup'

export default {
  name: 'HomeView',
  components: { SearchForm, SnackbarPopup },
  data() {
    return {
      error: false,
      username: '',
    }
  },
  methods: {
    createPopup(username) {
      this.error = true
      this.username = username
      setTimeout(() => this.removePopup(), 3000)
    },
    removePopup() {
      this.error = false
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  margin-bottom: -3em;
  height: 50vh;
  background: white;
  background: linear-gradient(
    135deg,
    rgb(11, 114, 155) 10%,
    rgb(14, 178, 184) 90%
  );
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.562);
  font-family: 'Slabo 27px', serif;
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
  text-shadow: 0 0 10px rgba(41, 41, 41, 0.61);
  font-size: 2.5em;
}

.search-form {
  margin-bottom: 1.5em;
}
</style>

