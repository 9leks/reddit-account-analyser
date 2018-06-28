import DoughnutGraph from '@/components/graphs/DoughnutGraph'
import LineGraph from '@/components/graphs/LineGraph'

const randomColor = () => {
  const num = Math.round(0xffffff * Math.random())
  const r = num >> 16
  const g = (num >> 8) & 255
  const b = num & 255
  return `rgba(${r}, ${g}, ${b}, 0.5)`
}

const randomColors = amount =>
  new Array(amount).fill('').map(() => randomColor())

const setGraphs = user => ({
  doughnut: {
    chartData: {
      labels: user.comments.subredditCount
        .slice(0, 15)
        .map(comment => comment.subreddit),
      datasets: [
        {
          data: user.comments.subredditCount
            .slice(0, 15)
            .map(comment => comment.count),
          backgroundColor: randomColors(
            user.comments.subredditCount.slice(0, 15).length
          ),
        },
      ],
    },
    options: {
      elements: {
        arc: {
          borderWidth: 0,
        },
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
  line: {
    chartData: {
      labels: user.comments.commentsOverTime.map(comment => comment.date),
      datasets: [
        {
          data: user.comments.commentsOverTime.map(comment => comment.count),
          backgroundColor: randomColors(user.comments.commentsOverTime.length),
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              suggestedMax: 5,
              beginAtZero: true,
              callback(value) {
                if (Number.isInteger(value)) return value
              },
            },
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
})

const standardOptions = {
  responsive: true,
  maintainAspectRatio: false,
  tooltips: {
    enabled: true,
    mode: 'single',
    callbacks: {
      label(tooltipItem, data) {
        if (tooltipItem.yLabel) {
          const label = tooltipItem.yLabel
          return `${label} comment${label === 1 ? '' : 's'}`
        }
        const label = data.labels[tooltipItem.index]
        const value = data.datasets[0].data[tooltipItem.index]
        return `${label}: ${value} comment${value === 1 ? '' : 's'}`
      },
    },
  },
}

export default user => {
  const graphs = setGraphs(user)

  return [
    {
      username: user.name,
      graph: true,
      title: 'COMMENTS / SUBREDDIT',
      icon: '🍩',
      options: { ...standardOptions, ...graphs.doughnut.options },
      component: DoughnutGraph,
      chartData: user.comments.subredditCount.length
        ? graphs.doughnut.chartData
        : false,
      type: 'comment',
    },
    {
      username: user.name,
      graph: true,
      title: 'COMMENTS / TIME',
      icon: '⌚',
      options: { ...standardOptions, ...graphs.line.options },
      component: LineGraph,
      chartData: user.comments.commentsOverTime.length
        ? graphs.line.chartData
        : false,
      type: 'comment',
    },
  ]
}
