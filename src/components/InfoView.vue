<template>
  <div>
    <transition name="fade">
      <div v-if="loading">
        <div class="container container--spinner">
          <div class="spinner" />
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="!loading && name">
        <div class="info--header">
          <div class="text--white text--shadow text--center text--header">
            OVERVIEW FOR <br>
            <span class="text--orange">
              /u/{{ name }}
            </span>
          </div>
        </div>

        <div class="container container--info">
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
.container--info {
  padding: 1rem;
}

.container--spinner {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
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
  width: 4rem;
  height: 4rem;
  border-top: 2px solid $orange;
  border-right: 2px solid transparent;
  border-bottom: 2px solid $orange;
  border-left: 2px solid transparent;
  border-radius: 50%;
  animation: spin 1.5s ease-in-out infinite;

  align-self: center;
  justify-self: center;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media screen and (min-width: 1024px) {
  .container--info {
    padding: 2rem;
    grid-gap: 4rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: 'data activity graphs';
  }

  .spinner {
    bottom: 1rem;
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
