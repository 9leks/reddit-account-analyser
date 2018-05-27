<template>
  <div class="grid grid__search">
    <div class="grid__item grid__item--dark grid__item--header">
      <div class="grid__item grid__item--center grid__item--vcenter">
        <img src="@/assets/logo.svg">
      </div>
    </div>
    <div class="grid__item grid__item--title grid__item--center grid__item--text-shadow">
      <p>
        <span class="orange">reddit</span> account analyser
      </p>
    </div>
    <div class="grid__item grid__item--information grid__item--center grid__item--text-shadow">
      <p>
        Get information on your data, recent activity and favorite subreddits
      </p>
    </div>
    <div class="grid__item grid__item--center grid__item__searchbar grid__item--center grid__item--drop-shadow">
      <Searchbar v-model="username"
                 @send="setUser(username)" />
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import Searchbar from '@/components/Searchbar'

export default {
  name: 'SearchView',
  components: { Searchbar },
  data() {
    return {
      username: '',
    }
  },
  methods: {
    setUser(username) {
      Cookies.getJSON(username)
        ? this.$store.dispatch('setUserByCookies', username)
        : this.$store
            .dispatch('setUserByAPICall', username)
            .catch(error => console.log(error)) // TODO: Add error handling
    },
  },
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .grid__search {
    display: grid;
  }
}

.grid__search {
  display: block;
}

.grid__item--title {
  margin-bottom: -2rem;
  font-weight: 200;
  font-size: 3rem;
  opacity: 0.9;
}

.grid__item--drop-shadow {
  filter: drop-shadow(0 6px 5px rgb(200, 200, 200));
}

.grid__item--information {
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 2.25rem;
  opacity: 0.75;
}

.grid__item__searchbar {
  margin-bottom: 10rem; // DELETE
}
</style>
