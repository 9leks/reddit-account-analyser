<template>
  <div class="app">
    <search-page class="search"
                 @submit="handleSubmit" />
    <app-page-selector :pages="pages"
                       class="selector"
                       @set-page="setPage" />
    <component :is="activePage"
               class="page" />
  </div>
</template>

<script>
import AppPageSelector from './components/AppPageSelector'
import SearchPage from './components/pages/SearchPage'
import DataPage from './components/pages/DataPage'
import ActivityPage from './components/pages/ActivityPage'
import GraphsPage from './components/pages/GraphsPage'

export default {
  name: 'App',
  components: {
    AppPageSelector,
    SearchPage,
    DataPage,
    ActivityPage,
    GraphsPage,
  },
  data() {
    return {
      pages: [
        {
          name: 'DataPage',
          title: 'DATA',
          active: 'active',
        },
        {
          name: 'ActivityPage',
          title: 'ACTIVITY',
          active: '',
        },
        {
          name: 'GraphsPage',
          title: 'GRAPHS',
          active: '',
        },
      ],
      activePage: 'DataPage',
    }
  },
  methods: {
    setPage(page, index) {
      this.activePage = page
      this.pages = this.pages.map((page, id) => {
        if (id === index) return { ...page, active: 'active' }
        return { ...page, active: '' }
      })
    },
    handleSubmit(value) {
      this.$store.dispatch('setUser', value).catch(error => alert(error))
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400');

* {
  font-family: 'Poppins', sans-serif;
}
</style>

<style lang="scss" scoped>
.app {
  display: grid;
}

.selector {
  display: none;
}

@media screen and (min-width: 1024px) {
  .app {
    grid-template-areas:
      'search search search search'
      'selector page page page';
  }

  .search {
    grid-area: search;
  }

  .selector {
    grid-area: selector;
  }

  .page {
    margin-bottom: 32.5%;

    grid-area: page;
  }
}
</style>

