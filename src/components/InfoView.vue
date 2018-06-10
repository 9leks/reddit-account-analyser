<template>
  <div>
    <transition name="fade"
                mode="in-out">
      <div v-if="loading">
        <div class="spinner" />
      </div>
    </transition>
    <transition name="fade">
      <div v-if="!loading && name"
           class="container container--info">

        <div class="info--header">
          <div class="text--white text--shadow text--center text--header">
            OVERVIEW FOR <br>
            <span class="text--orange">
              /u/{{ name }}
            </span>
          </div>
        </div>

        <div class="container info--columns">

          <div class="info--data">
            <div class="text--center text--shadow text--header">DATA</div>
            <DataColumn />
          </div>

          <div class="info--activity">
            <div class="text--center text--shadow text--header">ACTIVITY</div>
            <ActivityColumn />
          </div>

          <div class="info--graphs">
            <div class="text--center text--shadow text--header">GRAPHS</div>
            <GraphColumn />
          </div>
        </div>
      </div>
    </transition>
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
      loading: state => state.utils.loading,
    }),
  },
}
</script>

<style lang="scss" scoped>
.info--columns {
  padding: 1.25rem;
}

.info--header {
  @include header;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.45s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.spinner {
  position: absolute;
  right: 0;
  left: 0;
  margin-right: auto;
  margin-left: auto;
  width: 4rem;
  height: 4rem;
  border-top: 2px solid $orange;
  border-right: 2px solid transparent;
  border-bottom: 2px solid $orange;
  border-left: 2px solid transparent;
  border-radius: 50%;
  animation: spin 1.5s ease-in-out infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
    transform-origin: center;
  }
  100% {
    transform: rotate(360deg);
    transform-origin: center;
  }
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
    grid-area: graphs;
  }
}
</style>
