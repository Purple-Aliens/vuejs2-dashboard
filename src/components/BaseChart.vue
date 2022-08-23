<template>
  <div
    :id="id"
    :class="rootClass"
    class="chart"
  />
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

  props: {
    id: {
      type: [String, Number],
      required: true,
      default: null
    },
    option: {
      type: Object,
      required: true,
      default: () => {}
    },
    rootClass: {
      type: String,
      required: false,
      default: ''
    },
  },

  methods: {
    initChart(id, option) {
      this.myChart = echarts.init(document.getElementById(id))
      this.myChart.setOption(option)
    }
  },

  mounted() {
    this.initChart(this.id, this.option)
  }
}
</script>

<style scoped>
.chart {
  width: 600px;
  height:400px;
}
</style>
