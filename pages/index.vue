<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <NuxtLink to="/about">About</NuxtLink>
  <div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
  </div>
</template>
