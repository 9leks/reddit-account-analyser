<template>
  <div v-if="name"
       class="container container--info">

    <div class="info--header">
      <div class="text text--white text--shadow text--center text--header">OVERVIEW FOR <br>
        <span class="text--orange">
          /u/{{ name }}
        </span>
      </div>
    </div>

    <div class="container info--columns">

      <div class="info--data">
        <div class="text text--center text--shadow text--header">DATA</div>
        <DataColumn />
      </div>

      <div class="info--activity">
        <div class="text text--center text--shadow text--header">ACTIVITY</div>
        <ActivityColumn />
      </div>

      <div class="info--graphs">
        <div class="text text--center text--shadow text--header">GRAPHS</div>
        <!-- <GraphColumn /> -->
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

import DataColumn from './Info/DataColumn'
import ActivityColumn from './Info/ActivityColumn'
import GraphColumn from './Info/GraphColumn'

export default {
  name: 'InfoView',
  components: { DataColumn, ActivityColumn, GraphColumn },
  computed: {
    ...mapState({
      name: state => state.user.name,
    }),
  },
}
</script>

<style lang="scss" scoped>
.container--info {
  height: 100vh;
}

.info--columns {
  padding: 1rem 2rem;
}

.info--header {
  @include header;
}

@media screen and (min-width: 1024px) {
  .info--columns {
    grid-gap: 5rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: 'data activity graphs';
  }

  .info--data {
    grid-area: data;
  }

  .info--activity {
    grid-area: activity;
  }

  .info--graphs {
    height: 100%;

    grid-area: graphs;
  }
}
</style>
