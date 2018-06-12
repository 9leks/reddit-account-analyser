<template>
  <div class="container">
    <CardItem v-for="{ id, icon, header, chartData, type, options } in graphs"
              :key="id"
              :icon="icon"
              :header="header">
      <div v-if="chartData.labels.length"
           class="container container--center">
        <div class="graph">
          <component :is="type"
                     :chart-data="chartData"
                     :options="setOptions(options)" />
        </div>
      </div>
      <div v-else
           class="container container--center">
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
      graphs: [
        {
          type: 'DoughnutGraph',
          icon: quotesIcon,
          header: 'RECENT COMMENTS / SUBREDDIT',
          chartData: { labels: [], datasets: [] },
          options: {
            elements: {
              arc: { borderWidth: 0 },
            },
          },
        },
        {
          type: 'LineGraph',
          icon: quotesIcon,
          header: 'RECENT COMMENTS / TIME',
          chartData: { labels: [], datasets: [] },
          options: {},
        },
      ],
      standardOptions: {
        responsive: true,
        maintainAspectRatio: false,
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
      handler() {
        this.graphs[0].chartData = {
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
    setOptions(options) {
      return { ...this.standardOptions, ...options }
    },
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
.graph {
  width: 80%;
}

@media screen and (min-width: 375px) {
  .graph {
    width: 87%;
  }
}

@media screen and (min-width: 425px) {
  .graph {
    width: 88.75%;
  }
}
</style>
