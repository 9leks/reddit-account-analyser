<template>
  <div v-if="name"
       class="grid">
    <div class="grid__item grid__item--center grid__item--dark grid__item--header">
      <div class="grid__item grid__item--overview grid__item--text-shadow-dark grid__item--vcenter">
        OVERVIEW FOR <br>
        <span class="orange">/u/{{ name }}</span>
      </div>
    </div>
    <div class="grid__column--3 grid__item--center">

      <div class="grid__item grid__item--text-shadow">
        <h1 class="grid__item--column-header">DATA</h1>
        <DataView />
      </div>

      <div class="grid__item grid__item--text-shadow">
        <h1 class="grid__item--column-header">ACTIVITY</h1>
        <ActivityView />
      </div>

      <div class="grid__item grid__item--text-shadow">
        <h1 class="grid__item--column-header">GRAPHS</h1>
      </div>

    </div>
  </div>

</template>


<script>
import { mapState } from 'vuex'

import DataView from './DataView'
import ActivityView from './ActivityView'

export default {
  name: 'AnalyseView',
  components: { DataView, ActivityView },
  computed: {
    ...mapState({
      name: state => state.user.name,
    }),
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
  font-weight: 200;
  font-size: 2.5rem;
}

.grid__item--overview {
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
