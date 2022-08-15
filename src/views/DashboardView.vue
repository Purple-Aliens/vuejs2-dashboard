<template>
  <div class="container px-6 py-10 mx-auto">
    <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl">Welcome to our <br>Dashboard</h1>

    <div class="mt-2">
      <span class="inline-block w-40 h-1 rounded-full bg-blue-500" />
      <span class="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500" />
      <span class="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500" />
    </div>

    <div class="flex flex-wrap jus mt-20">
      <BaseChart />
    </div>
  </div>
</template>

<script>
import BaseChart from '@/components/BaseChart.vue';

export default {
  name: 'DashboardView',

  components: {
    BaseChart,
  }
}
</script>
