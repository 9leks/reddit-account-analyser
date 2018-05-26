<template>
  <div v-if="name">
    <div class="container fluid space-between">
      <UserOverviewMain />
      <UserOverviewActivity />
      <UserOverviewGraphs />
    </div>
  </div>
</template>

<script>
import UserOverviewMain from '@/components/analytics/UserOverviewMain'
import UserOverviewActivity from '@/components/analytics/UserOverviewActivity'
import UserOverviewGraphs from '@/components/analytics/UserOverviewGraphs'

import { mapState } from 'vuex'

export default {
  name: 'AnalyticsView',
  components: { UserOverviewMain, UserOverviewActivity, UserOverviewGraphs },
  computed: mapState({ name: state => state.user.name }),
}
</script>
