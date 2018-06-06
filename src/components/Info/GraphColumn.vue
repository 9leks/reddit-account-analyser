<template>
  <div class="container">

    <div class="card">
      <div class="card--header text">
        <div class="card--header--icon"><img src="@/static/img/quotes.png"></div>
        <div class="card--header--title">LATEST COMMENTS</div>
      </div>
      <div v-if="doughnutChartData.labels.length"
           class="card--content container container--center">
        <div class="graph--comments">
          <CommentsDoughnut :chart-data="doughnutChartData"
                            :options="options" />
        </div>
      </div>
      <div v-else
           class="card--content container container--center text">
        /u/{{ name }} has not posted any comment.
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import CommentsDoughnut from './Graph/CommentsDoughnut'

export default {
  name: 'GraphColumn',
  components: { CommentsDoughnut },
  data() {
    return {
      maxComments: 50,
      doughnutChartData: { labels: [], datasets: [] },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          arc: { borderWidth: 0 },
        },
      },
    }
  },
  computed: {
    ...mapState({
      name: state => state.user.name,
      comments: state => state.user.comments,
    }),
  },
  watch: {
    name: {
      immediate: true,
      async handler() {
        this.doughnutChartData = {
          labels: this.comments.subredditCount.map(comment => comment.subreddit),
          datasets: [{ 
            data: this.comments.subredditCount.map(comment => comment.count), 
            backgroundColor: this.randomColors(this.comments.subredditCount.length) 
            }],
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
