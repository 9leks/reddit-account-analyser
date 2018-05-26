<template>
  <div class="grid">
    <div class="grid__row grid__row--center">
      <SearchView />
    </div>
    <!-- <div class="grid__row grid__row--center"> -->
      <!-- <AnalyseView /> -->
    <!-- </div> -->
  </div>
</template>

<script>
import SearchView from './views/SearchView'
import AnalyseView from './views/AnalyseView'

export default {
  name: 'App',
  components: { SearchView, AnalyseView },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins:200,300');

* {
  font-family: 'Poppins', sans-serif;
}

.grid {
  display: grid;
}

.grid__row {
  grid-template-rows: 100%;
}

.grid__row--stretch {
  justify-self: stretch;
}

.grid__row--center {
  text-align: center;
}

.grid__item--header {
  grid-template-rows: 180px;
}

.grid__item {
  background-color: #e3e3e3;
}

.grid__item--center {
  justify-self: center;
}

.grid__item--vcenter {
  align-self: center;
}

.grid__item--dark {
  background-color: #4f4f4f;
}
</style>
