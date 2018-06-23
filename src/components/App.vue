<template>
  <div class="app">
    <app-home :pulse="pulse"
              @submit="handleSubmit" />
    <transition name="fade">
      <div v-if="user"
           class="app--data">
        <app-page-selector :pages="pages"
                           @set-page="setPage" />
        <app-page v-for="{ title, cards } in pages"
                  :key="title"
                  :cards="cards" />
      </div>
    </transition>
  </div>
</template>

<script>
import AppHome from './AppHome'
import AppPageSelector from './AppPageSelector'
import AppPage from './AppPage'
import getUser from '@/javascript/user.js'
import getData from '@/javascript/cards/data.js'

export default {
  name: 'App',
  components: {
    AppHome,
    AppPageSelector,
    AppPage,
  },
  data() {
    return {
      user: '',
      pulse: false,
      pages: [
        {
          title: 'DATA',
          cards: [],
          active: true,
        },
        {
          title: 'ACTIVITY',
          cards: [],
          active: false,
        },
        {
          title: 'GRAPHS',
          cards: [],
          active: false,
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
    async handleSubmit(e) {
      const searchbar = e.target[0]
      const { value } = searchbar
      this.pulse = this.togglePulse(searchbar)
      this.user = await getUser(value)
      this.pages[0].cards = getData(this.user)
    },
    togglePulse(searchbar) {
      setTimeout(() => (this.pulse = false), 750)
      searchbar.blur()
      return true
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400');

* {
  font-family: 'Poppins', sans-serif;
}

.orange {
  color: rgb(255, 120, 60);
}
</style>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media screen and (min-width: 1024px) {
  .app--data {
    display: grid;

    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: repeat(3, 1fr);
  }
}
</style>

