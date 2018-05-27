<template>
  <div class="grid">
    <div class="grid__row">
      <div class="grid__item--dark grid__item--header">
        <div class="grid__item--center grid__item--vcenter">
          <img src="@/assets/logo.svg">
        </div>
      </div>
    </div>
    <div class="grid__row">
      <div class="grid__item--title grid__item--center grid__item--text-shadow">
        <p>
          <span class="orange">reddit</span> account analyser
        </p>
      </div>
    </div>
    <div class="grid__row">
      <div class="grid__item--information grid__item--center grid__item--text-shadow">
        <p>
          Get information on your data, recent activity and favorite subreddits
        </p>
      </div>
    </div>
    <div class="grid__row">
      <Searchbar :width="'40%'"
                 v-model="username"
                 class="grid grid__item--center grid__item--searchbar grid__item--center grid__item--drop-shadow"
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
        : this.$store.dispatch('setUserByAPICall', username)
    },
  },
}
</script>

<style lang="scss" scoped>
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

.grid__item--searchbar {
  margin-bottom: 5rem;
}
</style>
