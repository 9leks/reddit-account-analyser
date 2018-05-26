<template>
  <div class="container vertical fluid">
    <!--  -->
  </div>
</template>

<script>
import moment from 'moment'
import { mapState } from 'vuex'

export default {
  name: 'UserOverviewActivity',
  computed: {
    ...mapState({
      name: state => state.user.name,
      created: state => state.user.created,
    }),
    signupDate() {
      return moment.unix(this.created).format('MMM Do YYYY')
    },
    timeFromSignup() {
      return moment.unix(this.created).fromNow()
    },
  },
}
</script>

<style lang="scss" scoped>
.text {
  color: rgb(255, 255, 255);
  text-shadow: 0 3px 30px rgba(83, 83, 83, 0.411);
  font-weight: 500;

  &.signup {
    margin-left: 0.5em;
  }

  &.title {
    margin-bottom: -0.3em;
    font-size: 4em;
  }

  .name {
    color: rgb(28, 253, 148);
    font-weight: 700;
  }
}

.fa-birthday-cake {
  color: rgba(255, 105, 94, 0.897);
  text-shadow: 0 0 5px rgba(255, 68, 0, 0.541);
  font-size: 2em;
}
</style>
