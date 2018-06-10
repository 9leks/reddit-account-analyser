<template>
  <div class="container">
    <CardItem v-for="post in posts"
              :key="post.id"
              :icon="post.icon"
              :header="post.header">
      <div v-if="post.link">
        <a class="container container--card">
          <i v-if="post.score_hidden"
             class="card--points text--hidden">score <br> hidden</i>
          <div v-else
               class="card--points">{{ post.score }}</div>
          <div class="card--arrows">
            <img v-if="post.score_hidden"
                 src="@/assets/img/blank_vote.png">
            <img v-else-if="post.score > 0"
                 src="@/assets/img/upvoted.png">
            <img v-else
                 src="@/assets/img/downvoted.png">
          </div>
          <div class="card--time">
            <a :href="post.link"
               class="card--link"
               target="_blank">
              /r/{{ post.subreddit }} <br>
              <span :title="new Date(post.created_utc * 1000)">
                {{ timeFromPost(post.created_utc) }} ago</span>
            </a>
          </div>
          <a class="card--paragraph"
             @click="toggleParagraph(post, post.title || post.body)">
            <div v-if="(post.title || post.body).length > maxLength && post.toggle">
              {{ (post.title || post.body).substring(0, maxLength) }}
              <i class="text--black">
                <span>
                  ... ({{ (post.title || post.body).substring(maxLength).length }} </span>
                <span>
                  {{ (post.title || post.body).substring(maxLength).length === 1 ? 'word' : 'words' }})
                </span>
              </i>
            </div>
            <div v-else>
              {{ post.title || post.body }}
            </div>
          </a>
        </a>
      </div>
      <div v-else>
        <div class="container container--center">
          /u/{{ name }} has not posted any {{ post.type }}s.
        </div>
      </div>
    </CardItem>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { distanceInWordsToNow } from 'date-fns'
import icon from '@/assets/img/quotes.png'

import CardItem from '@/components/Utilities/CardItem'

export default {
  name: 'ActivityColumn',
  components: { CardItem },
  data() {
    return {
      maxLength: 175,
      postData: [
        {
          id: 0,
          header: 'NEWEST COMMENT',
          type: 'comment',
          toggle: true,
          icon,
        },
        {
          id: 1,
          header: 'TOP COMMENT',
          type: 'comment',
          toggle: true,
          icon,
        },
        {
          id: 2,
          header: 'TOP SUBMISSION',
          type: 'submission',
          toggle: true,
          icon,
        },
      ],
    }
  },
  computed: {
    ...mapState({
      name: state => state.user.name,
      comments: state => state.user.comments.posts,
      submissions: state => state.user.submissions.posts,
    }),
    posts() {
      return [
        { ...this.comments.new, ...this.postData[0] },
        { ...this.comments.top, ...this.postData[1] },
        { ...this.submissions.top, ...this.postData[2] },
      ]
    },
  },
  watch: {
    name: {
      immediate: true,
      handler() {
        this.postData = this.posts.map((post, index) => {
          const text = post.title || post.body
          if (text) {
            return text.length > this.maxLength
              ? { ...this.postData[index], toggle: true }
              : { ...this.postData[index], toggle: false }
          }
          return this.postData[index]
        })
      },
    },
  },
  methods: {
    timeFromPost(time) {
      const date = new Date(time * 1000)
      return distanceInWordsToNow(date)
    },
    toggleParagraph(post, text) {
      if (text && text.length > this.maxLength) {
        this.postData[post.id].toggle = !this.postData[post.id].toggle
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.container--card {
  font-size: 1rem;

  grid-template-columns: 0.05fr 0.025fr 0.25fr 1fr 6fr;
  grid-template-areas:
    '. points . arrows time'
    '. points . arrows paragraph';
}

.text--hidden {
  font-size: 0.75rem;
}

.card--link {
  color: inherit;
  text-decoration: none;

  &:hover {
    color: rgb(0, 0, 0);
  }
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

.card--paragraph {
  grid-area: paragraph;
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
      'points . arrows paragraph';
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

