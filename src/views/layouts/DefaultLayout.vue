<template>
  <NavBar />
  <router-view />
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
