<template>
  <div @scroll="handleScroll">
    <app-home :pulse="pulse"
              @submit="handleSubmit" />
    <transition name="fade">
      <div v-if="user"
           class="app--cards">
        <app-page-selector :selector-line="selectorLine"
                           :pages="selectorRoutes"
                           class="app--selector"
                           @page-change="handlePageChange" />
        <div v-for="{ title, cards } in pages"
             :key="title"
             :class="`cards--${title}`">
          <div :id="title"
               class="cards--title">
            {{ title.toUpperCase() }}
          </div>
          <hr class="title--underline">
          <app-page :cards="cards" />
        </div>
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
import getActivity from '@/javascript/cards/activity.js'

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
      selectorLine: '0%',
      scrolled: false,
      pages: [
        {
          title: 'data',
          cards: [],
        },
        {
          title: 'activity',
          cards: [],
        },
        {
          title: 'graphs',
          cards: [],
        },
      ],
    }
  },
  computed: {
    selectorRoutes() {
      return [{ title: 'home' }, ...this.pages]
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const scroll =
        document.body.scrollTop || document.documentElement.scrollTop

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      const scrolled = Math.round(scroll / height * 100)

      this.selectorLine = `height: ${scrolled}%;`
    },
    handlePageChange(page) {
      page === 'home'
        ? window.scrollTo({ top: 0, behavior: 'smooth' })
        : document
            .getElementById(page)
            .scrollIntoView({ block: 'start', behavior: 'smooth' })
    },
    async handleSubmit(e) {
      const searchbar = e.target[0]
      const { value } = searchbar
      this.pulse = this.togglePulse(searchbar)
      this.user = await getUser(value)

      this.pages[0].cards = getData(this.user)
      this.pages[1].cards = getActivity(this.user)
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
.cards--title {
  margin-left: 10%;
  font-weight: 200;
  font-size: 2rem;
}

.title--underline {
  margin-bottom: 3rem;
  width: 90%;
  height: 0.1px;
  border-color: rgba(0, 0, 0, 0.25);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media screen and (min-width: 768px) {
  .cards--title {
    margin-left: 5%;
  }

  .title--underline {
    width: 95%;
  }
}

@media screen and (min-width: 1366px) {
  .app--cards {
    display: grid;

    grid-gap: 5rem 0;
    justify-self: center;
    grid-template-columns: 1fr 1fr 4fr 2fr;
    grid-template-areas:
      'selector . data .'
      'selector . activity .'
      'selector . graphs .';
  }
  .cards--title {
    margin-left: 0;
  }

  .title--underline {
    width: 100%;
  }

  .app--selector {
    grid-area: selector;
  }

  .cards--data {
    grid-area: data;
  }

  .cards--activity {
    grid-area: activity;
  }

  .cards--graphs {
    grid-area: graphs;
  }
}
</style>

