<template>
  <div class="container">

    <div class="card">
      <div class="card--header text">
        <div class="card--header--icon"><img src="@/static/img/quotes.png"></div>
        <div class="card--header--title">LAST 100 COMMENTS</div>
      </div>
      <div class="card--content container container--center">
        <div class="graph--comments">
          <CommentsPie :chart-data="pieChartData"
                       :options="options" />
        </div>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
import { numberOfCommentsPerSubreddit } from '@/reddit.js'
import { mapState } from 'vuex'

import CommentsPie from './Graph/CommentsPie'

export default {
  name: 'GraphColumn',
  components: { CommentsPie },
  data() {
    return {
      pieChartData: {},
      options: {},
    }
  },
  computed: {
    ...mapState({
      name: state => state.user.name,
    }),
  },
  watch: {
    name: {
      immediate: true,
      async handler() {
        const data = await numberOfCommentsPerSubreddit(this.name)
        const comments = data

        this.pieChartData = {
          labels: comments.map(comment => comment.subreddit),

          datasets: [
            {
              data: comments.map(comment => comment.count),
              backgroundColor: this.randomColors(comments.length),
            },
          ],
        }

        this.options = {
          responsive: true,
          maintainAspectRatio: false,
          elements: {
            arc: {
              borderWidth: 0,
            },
          },
        }
      },
    },
  },
  methods: {
    randomColor() {
      const num = Math.round(0xffffff * Math.random())
      const r = num >> 16
      const g = (num >> 8) & 255
      const b = num & 255
      return `rgba(${r}, ${g}, ${b}, 0.5)`
    },
    randomColors(amount) {
      return new Array(amount).fill('').map(() => this.randomColor())
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'cards';

.graph--comments {
  width: 80%;
}

@media screen and (min-width: 375px) {
  .graph--comments {
    width: 87%;
  }
}

@media screen and (min-width: 425px) {
  .graph--comments {
    width: 88.75%;
  }
}
</style>
