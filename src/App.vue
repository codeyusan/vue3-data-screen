<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>
 -->
 <div class="wrapper">
  <RouterView />
 </div>
</template>

<style scoped>
.wrapper {
  min-height: 100vh;
}

</style>
