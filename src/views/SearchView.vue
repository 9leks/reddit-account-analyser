<template>
  <div class="grid">
    <div class="grid grid__row grid__row--center">
      <div class="grid grid__item--dark grid__item--header">
        <div class="grid grid__item--center grid__item--vcenter">
          <img src="@/assets/logo.png">
        </div>
      </div>
      <div class="grid grid__item--title">
        <p class="drop-shadow">
          <span class="orange">reddit</span> account analyser
        </p>
      </div>
      <div class="grid grid__item--information">
        <p class="drop-shadow">
          Get information on your data, recent activity and favorite subreddits
        </p>
      </div>
      <div class="grid grid__item--searchbar grid__item--center">
        <input type="text">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchView',
}
</script>

<style lang="scss" scoped>
.grid__item--title {
  font-weight: 200;
  font-size: 48px;
}

.orange {
  color: #ff7843;
}

.drop-shadow {
  text-shadow: 0 5px 10px rgb(200, 200, 200);
}

.grid__item--information {
  font-weight: 300;
  font-size: 36px;
}

.grid__item--searchbar {
  width: 50%;
}
</style>
