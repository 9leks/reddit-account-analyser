<template>
  <div v-if="name">
    <div class="analytics">
      <div class="container fluid">
        <div class="row center">
          <h1 class="text title">Overview for
            <span class="name">/u/{{ name }}</span>
          </h1>
        </div>
        <div class="row center">
          <h2 class="text subtitle">Account created {{ timeFromSignup }} ({{ signupDate }}) </h2>
        </div>
        <div class="row center">
          <h2 class="text subtitle">Comment karma: {{ karma.comment }}</h2>
        </div>
        <div class="row center">
          <h2 class="text subtitle">Link karma: {{ karma.link }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { mapState } from 'vuex'

export default {
  name: 'AnalyticsView',
  computed: {
    ...mapState({
      name: state => state.user.name,
      created: state => state.user.created,
      karma: state => state.user.karma,
    }),
    signupDate() {
      return moment.unix(this.created).format('MMM Do YYYY')
    },
    timeFromSignup() {
      return moment.unix(this.created).fromNow()
    }
  },
}
</script>

<style lang="scss" scoped>
.text {
  text-shadow: 0 3px 30px rgba(83, 83, 83, 0.671);

  &.title {
    font-size: 3em;
  }

  .name {
    color: rgb(17, 66, 228);
  }
}
</style>

