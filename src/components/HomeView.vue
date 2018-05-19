<template>
  <div id="home">
    <div class="container fluid vertical">

      <div class="row center">
        <img src="@/assets/img/snoo.png"
             height="150"
             width="150">
      </div>

      <div class="row center">
        <SearchForm />
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
#home {
  background: linear-gradient(
      120deg,
      rgba(0, 140, 255, 0.8),
      rgba(0, 255, 242, 0) 70.71%
    ),
    linear-gradient(330deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
}
</style>
