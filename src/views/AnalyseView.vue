<template>
  <div class="grid">
    <div class="grid__row">
      <div class="grid__item--center grid__item--dark grid__item--header">
        <div class="grid__item--overview-header grid__item--text-shadow-dark">
          OVERVIEW FOR <br>
          <span class="orange">{{ name }}</span>
        </div>
      </div>
    </div>
    <div class="grid__row">
      <div class="grid__column--3 grid__item--center">
        <div class="grid__item--column-header grid__item--text-shadow">DATA</div>
        <div class="grid__item--column-header grid__item--text-shadow">ACTIVITY</div>
        <div class="grid__item--column-header grid__item--text-shadow">GRAPHS</div>
      </div>
    </div>
  </div>

</template>


<script>
import { format, distanceInWordsToNow } from 'date-fns'
import { mapState } from 'vuex'

export default {
  name: 'AnalyseView',
  computed: {
    ...mapState({
      name: state => state.user.name,
      created: state => state.user.created,
    }),
    signupDate() {
      return format(new Date(this.created * 1000), 'MMM Do, YYYY')
    },
    timeFromSignup() {
      return distanceInWordsToNow(new Date(this.created * 1000))
    },
  },
}
</script>

<style lang="scss" scoped>
.grid__column--3 {
  display: inherit;
}

.grid__item--column-header {
  font-weight: 200;
  font-size: 2rem;
}

.grid__item--overview-header {
  color: #f0f0f0;
  font-weight: 200;
  font-size: 2rem;
}

.grid__item--text-shadow-dark {
  text-shadow: 0 5px 10px rgba(37, 37, 37, 0.699);
}

@media screen and (min-width: 768px) {
  .grid__column--3 {
    grid-template-columns: repeat(3, 1fr);
  }

  .grid__item--overview-header {
    color: #f0f0f0;
    font-weight: 200;
    font-size: 4rem;
  }

  .grid__item--column-header {
    font-weight: 200;
    font-size: 3rem;
  }
}
</style>
