<template>
  <div class="container container--activity">
    <div v-for="post in comments"
         :key="post.id"
         class="card">
      <div class="card--header text">
        <div class="card--header--icon"><img src="@/static/img/quotes.png"></div>
        <div class="card--header--title">{{ post.header }}</div>
      </div>
      <a :href="post.link"
         target="_blank"
         class="container container--card card--content card--link text">
        <div class="card--points">{{ post.karma }}</div>
        <div class="card--arrows">
          <img v-if="post.karma > 0"
               src="@/static/img/upvoted.png">
          <img v-else
               src="@/static/img/downvoted.png">
        </div>
        <div class="card--time">{{ timeFromPost(post.created) }} ago</div>
        <div class="card--comment">{{ post.body }}</div>
      </a>
    </div>

    <div class="card">
      <div class="card--header text">
        <div class="card--header--icon"><img src="@/static/img/quotes.png"></div>
        <div class="card--header--title">TOP SUBMISSION</div>
      </div>
      <a :href="submissions.top.link"
         target="_blank"
         class="container container--card card--content card--link text">
        <div class="card--points">{{ submissions.top.karma }}</div>
        <div class="card--arrows">
          <img v-if="submissions.top.karma > 0"
               src="@/static/img/upvoted.png">
          <img v-else
               src="@/static/img/downvoted.png">
        </div>
        <div class="card--time">{{ timeFromPost(submissions.top.created) }} ago, <br> {{ submissions.top.comments }} comments</div>
        <div class="card--comment">{{ submissions.top.title }}</div>
      </a>
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
      comments: state => state.user.comments.posts,
      submissions: state => state.user.submissions.posts,
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
  transition: background-color 0.085s ease-in-out;

  grid-template-columns: 0.05fr 0.025fr 0.25fr 1fr 6fr;
  grid-template-areas:
    '. points . arrows time'
    '. points . arrows comment';

  &:hover {
    background-color: rgb(209, 209, 209);
  }
}

.card--link {
  color: inherit;
  text-decoration: none;
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
    grid-template-columns: 0.025fr 0.5fr 1.75fr 14fr;
  }
}

@media screen and (min-width: 1440px) {
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

