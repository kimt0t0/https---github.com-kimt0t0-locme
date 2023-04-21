<script lang="ts" setup>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
</script>

<template>
  <Header />
  <main class="main">
    <router-view/>
  </main>
  <Footer />
</template>

<style lang="scss">
  @use '@/styles/App.scss' as *;
  .main {
    max-width: $classic-ctn;
    margin: $space-m auto;
  }
</style>
