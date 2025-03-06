<script setup lang="ts">
const { data, status } = useRickAndMortyData('character')
</script>

<template>
  <ExampleApiResponse v-if="status === 'success'" :response="data" />
</template>
