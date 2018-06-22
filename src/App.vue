<template>
  <div class="app">
    <app-home :pulse="pulse"
              @submit="handleSubmit" /> {{ username }}
    <div class="data">
      <app-page-selector :pages="pages"
                         @set-page="setPage" />
      <app-page :data="data" />
    </div>
  </div>
</template>

<script>
import AppHome from './components/AppHome'
import AppPageSelector from './components/AppPageSelector'
import AppPage from './components/AppPage'

export default {
  name: 'App',
  components: {
    AppHome,
    AppPageSelector,
    AppPage,
  },
  data() {
    return {
      username: '',
      pulse: false,
      pages: [
        {
          page: 'DATA',
          active: 'active',
        },
        {
          page: 'ACTIVITY',
          active: '',
        },
        {
          page: 'GRAPHS',
          active: '',
        },
      ],
      data: [
        {
          title: 'CAKE DAY',
          icon: 'cake',
          content:
            "This account was created 232 days ago, on May 12th 2012. /u/spez's cake day is in 23 days.",
        },
        {
          title: 'KARMA',
          icon: 'upvote',
          content:
            '/u/spez has 2313 upvotes worth of comment karma and 1324 upvotes worth of link karma for a total 3224 upvotes.',
        },
        {
          title: 'POSTS',
          icon: 'posts',
          content:
            '/u/spez has submitted 23 submissions and 2313 comments for a total 3213 posts.',
        },
        {
          title: 'GILDED',
          icon: 'gilded',
          content:
            '/u/spez has been gilded 23 times from 230 comments and 201 submissions.',
        },
      ],
    }
  },
  methods: {
    setPage(page, index) {
      this.pages = this.pages.map((page, id) => {
        return id === index
          ? { ...page, active: true }
          : { ...page, active: false }
      })
    },
    handleSubmit(e) {
      const searchbar = e.target[0]
      const { value } = searchbar
      this.username = value

      this.emitPulse()
      searchbar.blur()
    },
    emitPulse() {
      this.pulse = true
      setTimeout(() => (this.pulse = false), 750)
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
  display: flex;
  flex-direction: column;
}

.selector {
  display: none;
}

@media screen and (min-width: 1024px) {
  .data {
    display: grid;

    grid-template-columns: 1fr 2fr 1fr;
  }
}
</style>

