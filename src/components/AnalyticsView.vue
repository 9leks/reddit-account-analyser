<template>
  <div v-if="name || this.$route.params.length">
    <div id="analytics">
      <div class="container fluid space-between">
        <UserOverviewMain />
        <UserOverviewActivity />
        <UserOverviewGraphs />
      </div>
    </div>
  </div>
</template>

<script>
import UserOverviewMain from './AnalyticsView/UserOverviewMain'
import UserOverviewActivity from './AnalyticsView/UserOverviewActivity'
import UserOverviewGraphs from './AnalyticsView/UserOverviewGraphs'

import { mapState } from 'vuex'

export default {
  name: 'AnalyticsView',
  components: { UserOverviewMain, UserOverviewActivity, UserOverviewGraphs },
  computed: mapState({ name: state => state.user.name }),
}
</script>
