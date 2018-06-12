<template>
  <div class="container container--graphs">
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
import commentIcon from '@/assets/img/comment.png'
import calendarIcon from '@/assets/img/calendar.png'

import DoughnutGraph from '@/components/Utilities/DoughnutGraph'
import LineGraph from '@/components/Utilities/LineGraph'
import CardItem from '@/components/Utilities/CardItem'

export default {
  name: 'GraphColumn',
  components: { DoughnutGraph, LineGraph, CardItem },
  data() {
    return {
      graphs: [
        {
          type: 'DoughnutGraph',
          icon: commentIcon,
          header: 'RECENT COMMENTS / SUBREDDIT',
          chartData: { labels: [], datasets: [] },
          options: {
            elements: {
              arc: { borderWidth: 0 },
            },
            legend: {
              labels: {
                fontColor: 'rgba(0, 0, 0, 0.75)',
                fontFamily: 'Poppins',
                fontStyle: '400',
                fontSize: 12.5,
              },
            },
          },
        },
        {
          type: 'LineGraph',
          icon: calendarIcon,
          header: 'RECENT COMMENTS / TIME',
          chartData: { labels: [], datasets: [] },
          options: {
            legend: {
              display: false,
            },
            scales: {
              yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: '# of comments',
                    fontColor: 'rgba(0, 0, 0, 0.75)',
                    fontFamily: 'Poppins',
                    fontStyle: '400',
                    fontSize: 16,
                  },
                },
              ],
              xAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: 'Date',
                    fontColor: 'rgba(0, 0, 0, 0.75)',
                    fontFamily: 'Poppins',
                    fontStyle: '400',
                    fontSize: 16,
                  },
                },
              ],
            },
          },
        },
      ],
      graphFont: {
        fontColor: 'rgba(0, 0, 0, 0.75)',
        fontFamily: 'Poppins',
        fontStyle: '400',
      },
      standardOptions: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          enabled: true,
          mode: 'single',
          callbacks: {
            label(tooltipItem, data) {
              if (tooltipItem.yLabel) {
                const label = tooltipItem.yLabel
                return label === 1 ? `${label} comment` : `${label} comments`
              }
              const label = data.labels[tooltipItem.index]
              const value = data.datasets[0].data[tooltipItem.index]
              return `${label}: ${
                value === 1 ? `${value} comment` : `${value} comments`
              }`
            },
          },
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

        this.graphs[1].chartData = {
          labels: this.comments.commentsOverTime.map(comment => comment.date),
          datasets: [
            {
              data: this.comments.commentsOverTime.map(
                comment => comment.count
              ),
              backgroundColor: this.randomColors(
                this.comments.commentsOverTime.length
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
  width: 80vw;
}

@media screen and (min-width: 1024px) {
  .graph {
    width: 20vw;
  }
}

@media screen and (min-width: 1366px) {
  .container--graphs {
    grid-gap: 2.5rem;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
