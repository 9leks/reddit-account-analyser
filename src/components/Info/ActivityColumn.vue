<template>
  <div class="container container--activity">
    <div class="card">
      <div class="card--header text">
        <div class="card--header--icon"><img src="@/static/img/quotes.png"></div>
        <div class="card--header--title">NEWEST COMMENT</div>
      </div>
      <div class="container container--card card--content text">
        <div class="card--arrows">
          <img v-if="comment.new.karma"
               src="@/static/img/upvoted.png">
          <img v-else
               src="@/static/img/downvoted.png">
        </div>
        <div class="card--points">{{ comment.new.karma }} {{ comment.new.karma === 1 ? 'point' : 'points' }}</div>
        <div class="card--time">{{ timeFromPost(comment.new.created) }} ago</div>
        <div class="card--comment">{{ comment.new.body }}</div>
      </div>
    </div>

    <div class="card">
      <div class="card--header text">
        <div class="card--header--icon"><img src="@/static/img/quotes.png"></div>
        <div class="card--header--title">TOP COMMENT</div>
      </div>
      <div class="container container--card card--content text">
        <div class="card--arrows">
          <img v-if="comment.top.karma"
               src="@/static/img/upvoted.png">
          <img v-else
               src="@/static/img/downvoted.png">
        </div>
        <div class="card--points">{{ comment.top.karma }} {{ comment.top.karma === 1 ? 'point' : 'points' }}</div>
        <div class="card--time">{{ timeFromPost(comment.top.created) }} ago</div>
        <div class="card--comment">{{ comment.top.body }}</div>
      </div>
    </div>

    <div class="card">
      <div class="card--header text">
        <div class="card--header--icon"><img src="@/static/img/quotes.png"></div>
        <div class="card--header--title">TOP SUBMISSION</div>
      </div>
      <div class="container container--card card--content text">
        <div class="card--arrows">
          <img v-if="submission.top.karma"
               src="@/static/img/upvoted.png">
          <img v-else
               src="@/static/img/downvoted.png">
        </div>
        <div class="card--points">{{ submission.top.karma }} {{ submission.top.karma === 1 ? 'point' : 'points' }}, <br> {{ submission.top.comments }} {{ submission.top.comments === 1 ? 'comment' : 'comments' }}</div>
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

  grid-template-columns: 0.25fr 0.25fr 2.25fr 3fr;
  grid-template-areas:
    'arrows . points time '
    'arrows . comment comment';
}

.card--time {
  color: $gray;
  font-size: 0.85rem;

  grid-area: time;
}

.card--points {
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
    grid-template-columns: 0.25fr 0.25fr 1.75fr 3fr;
  }
}

@media screen and (min-width: 425px) {
  .container--card {
    grid-template-columns: 0.25fr 0.25fr 1.25fr 3fr;
  }
}

@media screen and (min-width: 768px) {
  .container--card {
    grid-template-columns: 0.25fr 0.25fr 1.25fr 8fr;
  }
}

@media screen and (min-width: 1024px) {
  .container--card {
    grid-template-columns: 0.25fr 0.25fr 2fr 4fr;
  }
}

@media screen and (min-width: 1440px) {
  .container--card {
    grid-template-columns: 0.25fr 0.25fr 2fr 6fr;
  }
}

@media screen and (min-width: 1920px) {
  .container--card {
    grid-template-columns: 0.25fr 0.25fr 2fr 10fr;
  }
}

@media screen and (min-width: 2560px) {
  .container--card {
    grid-template-columns: 0.25fr 0.25fr 2fr 16fr;
  }
}
</style>

