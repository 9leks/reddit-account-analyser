<template>
  <div class="container container--info">
    <div class="info--header">
      <div class="text text--white text--shadow text--center text--header">OVERVIEW FOR <br>
        <span class="text--orange">
          /u/spez
        </span>
      </div>
    </div>

    <div class="container info--columns">
      <div class="info--data">
        <DataColumn />
      </div>

      <div class="info--activity">
        <DataColumn />
      </div>

      <div class="info--graphs">
        <DataColumn />
      </div>
    </div>

  </div>
</template>

<script>
import DataColumn from './Info/DataColumn'

export default {
  name: 'InfoView',
  components: { DataColumn },
}
</script>

<style lang="scss" scoped>
.container--info {
  height: 100vh;
  grid-template-areas:
    'header'
    'data'
    'activity'
    'graphs';
}

.info--columns {
  padding: 1rem 2rem;
}

.info--header {
  grid-area: header;
  @include header;
}

@media screen and (min-width: 768px) {
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
    grid-area: graphs;
  }
}
</style>
