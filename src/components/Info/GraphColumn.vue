<template>
  <div class="container container--graphs">
    <div class="graphs--comment-per-subreddit">
      <CommentsPie :chart-data="pieChartData"
                   :options="options" />
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
      return `rgba(${r}, ${g}, ${b}, 0.75)`
    },
    randomColors(amount) {
      return new Array(amount).fill('').map(() => this.randomColor())
    },
  },
}
</script>

<style lang="scss" scoped>
.container--graphs {
  grid-template-areas:
    'comment-per-subreddit'
    'dsadsa'
    'fdsfdsdas';
}

.graphs--comment-per-subreddit {
  grid-area: comment-per-subreddit;
}
</style>
