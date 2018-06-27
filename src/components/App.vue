<template>
  <div id="top"
       @scroll="handleScroll">
    <app-home :pulse="pulse"
              :loading="loading"
              :app-searchbar="AppSearchbar"
              @submit="handleSubmit" />
    <transition name="fade">
      <div v-if="user && !loading"
           class="app--cards">
        <app-page-selector :selector-line="selectorLine"
                           :pages="selectorRoutes"
                           class="app--selector"
                           @page-change="setPage" />
        <div v-for="{ title, cards } in pages"
             :key="title"
             :class="`cards--${title}`">
          <div :id="title"
               class="cards--title">
            {{ title.toUpperCase() }}
          </div>
          <hr class="title--underline">
          <app-page :cards="cards"
                    :app-card="AppCard" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import AppHome from './AppHome'
import AppPageSelector from './AppPageSelector'
import AppPage from './AppPage'
import AppCard from './AppCard'
import AppSearchbar from './AppSearchbar'
import getUser from '../javascript/user.js'
import getData from '../javascript/cards/data.js'
import getActivity from '../javascript/cards/activity.js'
import getGraphs from '../javascript/cards/graphs.js'

export default {
  name: 'App',
  components: {
    AppHome,
    AppPageSelector,
    AppPage,
  },
  data() {
    return {
      AppCard,
      AppSearchbar,
      user: '',
      loading: false,
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
  watch: {
    async '$route.params.username'() {
      const username = this.$route.params.username
      if (username) {
        this.$scrollTo('#top', 500, { offset: -120 })
        await this.setUser(username)
      }
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  async mounted() {
    const username = this.$route.params.username
    if (username) await this.setUser(username)
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
    setPage(page) {
      page === 'home'
        ? window.scrollTo({ top: 0, behavior: 'smooth' })
        : document
            .getElementById(page)
            .scrollIntoView({ block: 'start', behavior: 'smooth' })
    },
    async handleSubmit(e) {
      const searchbar = e.target[0]
      const { value } = searchbar
      if (value) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        this.togglePulse(searchbar)
        await this.setUser(value)
      }
    },
    async setUser(user) {
      try {
        this.loading = true
        this.user = await getUser(user)
        this.pages = this.getPages(this.user)
        this.$router.push(`/${user}`)
      } catch (error) {
        setTimeout(
          () =>
            this.$toasted.error(`${user} does not exist!`, {
              theme: 'bubble',
              position: 'bottom-center',
              duration: 2500,
            }),
          1000
        )
      }
      setTimeout(() => (this.loading = false), 1000)
    },
    getPages(user) {
      const cards = [getData(user), getActivity(user), getGraphs(user)]
      return this.pages.map((page, index) => ({ ...page, cards: cards[index] }))
    },
    togglePulse(searchbar) {
      this.pulse = true
      setTimeout(() => (this.pulse = false), 750)
      searchbar.blur()
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0.25;
}

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
      'selector . data     .'
      'selector . activity .'
      'selector . graphs   .';
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

