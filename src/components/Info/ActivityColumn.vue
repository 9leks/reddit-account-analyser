<template>
  <div class="container container--activity">
    <div v-for="post in comment"
         :key="post.id"
         class="card">
      <div class="card--header text">
        <div class="card--header--icon"><img src="@/static/img/quotes.png"></div>
        <div class="card--header--title">{{ post.header }}</div>
      </div>
      <div class="container container--card card--content text">
        <div class="card--points">{{ post.karma }}</div>
        <div class="card--arrows">
          <img v-if="post.karma > 0"
               src="@/static/img/upvoted.png">
          <img v-else
               src="@/static/img/downvoted.png">
        </div>
        <div class="card--time">{{ timeFromPost(post.created) }} ago</div>
        <div class="card--comment">{{ post.body }}</div>
      </div>
    </div>

    <div class="card">
      <div class="card--header text">
        <div class="card--header--icon"><img src="@/static/img/quotes.png"></div>
        <div class="card--header--title">TOP SUBMISSION</div>
      </div>
      <div class="container container--card card--content text">
        <div class="card--points">{{ submission.top.karma }}</div>
        <div class="card--arrows">
          <img v-if="submission.top.karma > 0"
               src="@/static/img/upvoted.png">
          <img v-else
               src="@/static/img/downvoted.png">
        </div>
        <div class="card--time">{{ timeFromPost(submission.top.created) }} ago</div>
        <div class="card--comment">{{ submission.top.title }}</div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { distanceInWordsToNow } from 'date-fns'

export default {
  name: 'ActivityColumn',
  computed: {
    ...mapState({
      comment: state => state.user.comment,
      submission: state => state.user.submission,
    }),
  },
  methods: {
    timeFromPost(time) {
      const date = new Date(time * 1000)
      return distanceInWordsToNow(date)
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'cards';

.container--card {
  font-size: 1rem;

  grid-template-columns: 0.05fr 0.025fr 0.25fr 1fr 6fr;
  grid-template-areas:
    '. points . arrows time'
    '. points . arrows comment';
}

.card--time {
  color: $gray;
  font-size: 0.85rem;

  grid-area: time;
}

.card--points {
  align-self: center;
  color: $gray;
  font-size: 0.85rem;

  grid-area: points;
}

.card--arrows {
  align-self: center;

  grid-area: arrows;
}

.card--comment {
  grid-area: comment;
}

@media screen and (min-width: 375px) {
  .container--card {
    grid-template-columns: 0.05fr 0.025fr 0.25fr 0.5fr 6fr;
  }
}

@media screen and (min-width: 768px) {
  .container--card {
    grid-template-areas:
      'points . arrows time'
      'points . arrows comment';
    grid-template-columns: 0.025fr 0.125fr 0.45fr 12fr;
  }
}

@media screen and (min-width: 1024px) {
  .container--card {
    grid-template-columns: 0.025fr 0.5fr 1fr 12fr;
  }
}

@media screen and (min-width: 2560px) {
  .container--card {
    grid-template-columns: 0.025fr 0.25fr 1fr 16fr;
  }
}
</style>

