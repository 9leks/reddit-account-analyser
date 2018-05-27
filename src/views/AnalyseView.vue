<template>
  <div class="grid">
    <div class="grid__item grid__item--center grid__item--dark grid__item--header">
      <div class="grid__item grid__item--overview grid__item--text-shadow-dark grid__item--vcenter">
        OVERVIEW FOR <br>
        <span class="orange">/u/{{ name }}</span>
      </div>
    </div>
    <div class="grid__column--3 grid__item--center">
      <div class="grid__item  grid__item--text-shadow">
        <h1 class="grid__item--column-header">DATA</h1>

        <CardItem>
          <template slot="header">
            CAKE DAY
          </template>
          <template slot="paragraph">
            This account was created {{ timeFromSignup }}, on
            <span class="orange">{{ signupDate }}</span>, meaning /u/{{ name }}'s
            <span class="orange">cake day</span> is in {{ timeToCakeDay }}
          </template>
        </CardItem>

      </div>
      <div class="grid__item  grid__item--text-shadow">
        <h1 class="grid__item--column-header">ACTIVITY</h1>

      </div>
      <div class="grid__item  grid__item--text-shadow">
        <h1 class="grid__item--column-header">DATA</h1>

      </div>
    </div>
  </div>

</template>


<script>
import { format, distanceInWordsToNow } from 'date-fns'
import { mapState } from 'vuex'

import CardItem from '@/components/CardItem'

export default {
  name: 'AnalyseView',
  components: { CardItem },
  computed: {
    ...mapState({
      name: state => state.user.name,
      created: state => state.user.created,
    }),
    signupDate() {
      const date = new Date(this.created * 1000)
      return format(date, 'MMM Do, YYYY')
    },
    timeFromSignup() {
      const date = new Date(this.created * 1000)
      return distanceInWordsToNow(date)
    },
    timeToCakeDay() {
      const date = new Date(this.created * 1000)
      const month = date.getMonth()
      const day = date.getDate()
      const year = new Date().getFullYear()
      return distanceInWordsToNow(new Date(year, month, day))
    },
  },
}
</script>

<style lang="scss" scoped>
.grid__item--header {
  margin-bottom: -0.5rem;
}

.grid__column--3 {
  display: inherit;

  grid-gap: 2rem;
}

.grid__item--column-header {
  margin-bottom: -1rem;
  font-weight: 200;
  font-size: 2.5rem;
}

.grid__item--overview {
  color: #f0f0f0;
  font-weight: 200;
  font-size: 3rem;
}

.grid__item--text-shadow-dark {
  text-shadow: 0 5px 10px rgba(37, 37, 37, 0.699);
}

@media screen and (min-width: 768px) {
  .grid__column--3 {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0;
  }

  .grid__item--overview {
    color: #f0f0f0;
    font-weight: 200;
    font-size: 3rem;
  }

  .grid__item--column-header {
    font-weight: 200;
    font-size: 3rem;
  }
}
</style>
