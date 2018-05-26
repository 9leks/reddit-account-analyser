<template>
  <div class="grid">
    <div class="grid grid__row grid__row--center">
      <div class="grid grid__item--dark grid__item--header">
        <img class="grid grid__item--center grid__item--vcenter"
             src="@/assets/logo.svg">
      </div>
      <div class="grid grid__item--title grid__item--text-shadow">
        <p>
          <span class="orange">reddit</span> account analyser
        </p>
      </div>
      <div class="grid grid__item--information grid__item--text-shadow">
        <p>
          Get information on your data, recent activity and favorite subreddits
        </p>
      </div>
      <div class="grid grid__item--searchbar grid__item--center grid__item--drop-shadow ">
        <Searchbar />
      </div>
    </div>
  </div>
</template>

<script>
import Searchbar from '@/components/Searchbar'

export default {
  name: 'SearchView',
  components: { Searchbar },
}
</script>

<style lang="scss" scoped>
.grid__item--header {
  margin-bottom: 4rem;

  grid-template-rows: 180px;
}

.grid__item--title {
  margin-bottom: -2rem;
  font-weight: 200;
  font-size: 48px;
  opacity: 0.9;
}

.orange {
  color: #ff7843;
}

.grid__item--dark {
  background-color: #4f4f4f;
}

.grid__item--text-shadow {
  text-shadow: 0 5px 10px rgb(200, 200, 200);
}

.grid__item--drop-shadow {
  filter: drop-shadow(0 10px 5px rgb(200, 200, 200));
}

.grid__item--information {
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 36px;
  opacity: 0.75;
}

.grid__item--searchbar {
  width: 50%;
}
</style>
