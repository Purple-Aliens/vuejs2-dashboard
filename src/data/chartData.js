const chartData = [
  {
    type: 'bar',
    id: 'barChart',
    option: {
      xAxis: {
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {},
      series: [
        {
          type: 'bar',
          data: [23, 24, 18, 25, 27, 28, 25]
        }
      ]
    }
  },
  {
    type: 'line',
    id: 'lineChart',
    option: {
      xAxis: {
        type: 'category',
        data: ['A', 'B', 'C']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150],
          type: 'line'
        }
      ]
    }
  },
  {
    type: 'pie',
    id: 'pieChart',
    option: {
      series: [
        {
          type: 'pie',
          data: [
            {
              value: 335,
              name: 'Direct Visit'
            },
            {
              value: 234,
              name: 'Union Ad'
            },
            {
              value: 1548,
              name: 'Search Engine'
            }
          ]
        }
      ]
    }
  },
  {
    type: 'scatter',
    id: 'scatterChart',
    option: {
      xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      },
      yAxis: {},
      series: [
        {
          type: 'scatter',
          data: [220, 182, 191, 234, 290, 330, 310]
        }
      ]
    }
  },
]

export default chartData
