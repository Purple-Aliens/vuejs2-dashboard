<template>
  <div class="px-6 py-10 ">
    <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl">Welcome to our <br>Dashboard</h1>

    <div class="mt-2">
      <span class="inline-block w-40 h-1 rounded-full bg-blue-500" />
      <span class="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500" />
      <span class="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500" />
    </div>

    <div class="flex flex-wrap mt-2">
      <BaseChart
        v-for="(chart, index) in chartData"
        :key="index"
        :id="chart.id"
        :option="chart.option"
        :root-class="`space-y-3`"
      />
    </div>
  </div>
</template>

<script>
import BaseChart from '@/components/BaseChart.vue'
import chartData from '@/data/chartData'

export default {
  name: 'DashboardView',

  data: () => {
    return {
      chartData: chartData
    }
  },

  components: {
    BaseChart,
  }
}
</script>
