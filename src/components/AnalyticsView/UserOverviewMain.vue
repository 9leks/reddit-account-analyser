<template>
  <div class="container vertical fluid">

    <h1 class="text title">Overview for
      <span class="name">/u/{{ name }}</span>
    </h1>

    <div class="row">
      <i class="vertical-center fas fa-birthday-cake" />
      <h1 class="text">{{ signupDate }}, {{ timeFromSignup }}</h1>
    </div>

    <div class="row">
      <i class="vertical-center fas fa-arrow-up" />
      <h1 class="text">Link karma: {{ karma.link }}, comment karma: {{ karma.comment }}</h1>
    </div>

    <div class="row">
      <i class="vertical-center fas fa-paper-plane" />
      <h1 class="text"># Submissions: {{ submissions }}</h1>
    </div>

    <div class="row">
      <i class="vertical-center fas fa-comment-alt" />
      <h1 class="text"># Comments: {{ comments }}</h1>
    </div>

  </div>
</template>

<script>
import moment from 'moment'
import { mapState } from 'vuex'

export default {
  name: 'UserOverviewHead',
  computed: {
    ...mapState({
      name: state => state.user.name,
      created: state => state.user.created,
      karma: state => state.user.karma,
      submissions: state => state.user.submissions,
      comments: state => state.user.comments,
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
  margin-left: 0.5em;
  color: rgb(255, 255, 255);
  text-shadow: 0 3px 30px rgba(83, 83, 83, 0.411);
  font-weight: 500;

  &.title {
    margin-bottom: 0.3em;
    margin-left: 0;
    font-size: 4em;
  }

  .name {
    color: rgb(28, 253, 148);
    font-weight: 700;
  }
}

.fas {
  color: rgba(240, 70, 58, 0.76);
  text-shadow: 0 0 5px rgba(233, 97, 47, 0.521);
}

.fa-birthday-cake {
  margin-left: -0.2em;
  font-size: 2em;
}

.fa-arrow-up {
  margin-top: 0.5em;
  transform: scaleY(1.5);
}
</style>
