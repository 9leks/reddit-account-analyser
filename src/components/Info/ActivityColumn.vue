<template>
  <div class="container container--activity">
    <div v-for="post in comments"
         :key="post.id"
         class="card">
      <div class="card--header text">
        <div class="card--header--icon"><img src="@/static/img/quotes.png"></div>
        <div class="card--header--title">{{ post.header }}</div>
      </div>
      <div v-if="post.link">
        <a :href="post.link"
           target="_blank"
           class="container container--card card--content card--link text">
          <i v-if="post.score_hidden"
             class="card--points text--hidden">score <br> hidden</i>
          <div v-else
               class="card--points">{{ post.score }}</div>
          <div class="card--arrows">
            <img v-if="post.score_hidden"
                 src="@/static/img/blank_vote.png">
            <img v-else-if="post.score > 0"
                 src="@/static/img/upvoted.png">
            <img v-else
                 src="@/static/img/downvoted.png">
          </div>
          <div class="card--time">
            /r/{{ post.subreddit }} <br>
            <span :title="new Date(post.created_utc * 1000)">{{ timeFromPost(post.created_utc) }} ago</span>
          </div>
          <div class="card--comment">{{ post.body }}</div>
        </a>
      </div>
      <div v-else>
        <div class="container container--center card--content text">/u/{{ name }} has not posted any comment.</div>
      </div>
    </div>

    <div class="card">
      <div class="card--header text">
        <div class="card--header--icon"><img src="@/static/img/quotes.png"></div>
        <div class="card--header--title"> {{ submissions.top.header }}</div>
      </div>
      <div v-if="submissions.top.link">
        <a :href="submissions.top.link"
           target="_blank"
           class="container container--card card--content card--link text">
          <div class="card--points">{{ submissions.top.score }}</div>
          <div class="card--arrows">
            <img v-if="submissions.top.score > 0"
                 src="@/static/img/upvoted.png">
            <img v-else
                 src="@/static/img/downvoted.png">
          </div>
          <div class="card--time">
            /r/{{ submissions.top.subreddit }}
            <br>
            <span :title="new Date(submissions.top.created_utc * 1000)">{{ timeFromPost(submissions.top.created_utc) }} ago</span>, {{ submissions.top.num_comments }} comments
          </div>
          <div class="card--comment">{{ submissions.top.title }}</div>
        </a>
      </div>
      <div v-else>
        <div class="container container--center card--content text">/u/{{ name }} has not posted any submission.</div>
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
      name: state => state.user.name,
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

  &:active {
    background-color: rgba(219, 182, 164, 0.596);
  }
}

.text--hidden {
  font-size: 0.75rem;
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

