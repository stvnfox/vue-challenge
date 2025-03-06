<script setup lang="ts">
const { data, status } = usePokemonData('pokemon')
</script>

<template>
  <ExampleApiResponse v-if="status === 'success'" :response="data" />
</template>
