<template>
  <div class="grid">
    <div class="grid__row">
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
  grid-template-columns: 1;
}

.grid__row {
  grid-template-rows: 1;
}

.grid__row--center {
  justify-content: center;
  text-align: center;
}

.grid__item {
  background-color: rgb(227, 227, 227);
}

.grid__item--center {
  justify-self: center;
  text-align: center;
}

.grid__item--vcenter {
  align-self: center;
}
</style>
