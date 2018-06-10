<template>
  <div class="container">

    <CardItem :icon="quotesIcon"
              :header="'LATEST COMMENTS'">
      <div v-if="doughnutChartData.labels.length"
           class="card--content container container--center">
        <div class="graph--comments">
          <DoughnutGraph :chart-data="doughnutChartData"
                         :options="options" />
        </div>
      </div>
      <div v-else
           class="card--content container container--center">
        /u/{{ name }} has not posted any comments.
      </div>
    </CardItem>

    <CardItem :icon="quotesIcon"
              :header="'COMMENTS OVER TIME'">
      <div v-if="lineChartData.labels.length"
           class="card--content container container--center">
        <div class="graph--comments">
          <DoughnutGraph :chart-data="lineChartData"
                         :options="options" />
        </div>
      </div>
      <div v-else
           class="card--content container container--center">
        /u/{{ name }} has not posted any comments.
      </div>
    </CardItem>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import quotesIcon from '@/assets/img/quotes.png'

import DoughnutGraph from './Graph/DoughnutGraph'
import LineGraph from './Graph/LineGraph'
import CardItem from '@/components/Utilities/CardItem'

export default {
  name: 'GraphColumn',
  components: { DoughnutGraph, LineGraph, CardItem },
  data() {
    return {
      quotesIcon,
      maxComments: 50,
      doughnutChartData: { labels: [], datasets: [] },
      lineChartData: { labels: [], datasets: [] },
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
          labels: this.comments.subredditCount.map(
            comment => comment.subreddit
          ),
          datasets: [
            {
              data: this.comments.subredditCount.map(comment => comment.count),
              backgroundColor: this.randomColors(
                this.comments.subredditCount.length
              ),
            },
          ],
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
