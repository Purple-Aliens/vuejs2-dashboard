<template>
  <div>
    <div
      class="space-y-3 chart"
      id="main"
    />
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'BaseChart',

  data: () => {
    return {
      myChart: ''
    }
  },

  methods: {
    initChart(id) {
      this.myChart = echarts.init(document.getElementById(id))

      this.myChart.setOption({
        title: {
          text: 'ECharts Getting Started Example'
        },
        tooltip: {},
        xAxis: {
          data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks']
        },
        yAxis: {},
        series: [
          {
            name: 'sales',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    }
  },

  mounted() {
    this.initChart('main')
  }
}
</script>

<style scoped>
.chart {
  width: 600px;
  height:400px;
}
</style>
