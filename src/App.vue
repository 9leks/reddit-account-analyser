<template>
  <div>
    <SearchView />
    <AnalyseView />
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
@import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400');

* {
  font-family: 'Poppins', sans-serif;
}

.orange {
  color: #ff7843;
}

.grid {
  display: grid;
  padding-bottom: 200px; // DELETE
}

.grid__item {
  display: inherit;
}

.grid__item--center {
  justify-content: center;
  text-align: center;
}

.grid__item--vcenter {
  align-items: center;
}

.grid__item--header {
  margin-bottom: 4rem;
  padding: 0.5rem;

  grid-template-rows: 180px;
}

.grid__item--dark {
  background-color: #4f4f4f;
}

.grid__item--text-shadow {
  text-shadow: 0 5px 5px rgb(200, 200, 200);
}
</style>
