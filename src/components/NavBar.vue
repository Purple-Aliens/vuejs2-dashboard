<template>
  <div>
    <nav class="bg-white shadow dark:bg-gray-800">
      <div class="items-left justify-left p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <router-link
          :to="{ name: 'DashboardView' }"
          class="text-gray-800 transition-colors duration-200 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
        >
          Dashboard
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'NavBar',
}
</script>

<style></style>
