<template>
  <div>
    <NavBar />
    <div class="container px-6 py-10 mx-auto">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'DefaultLayout',

  components: {
    NavBar
  }
}
</script>

<style></style>
