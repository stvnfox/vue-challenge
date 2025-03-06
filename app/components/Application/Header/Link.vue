<script setup lang="ts">
const props = defineProps<{
  to: string
  label: string
}>()
</script>

<template>
  <UButton :to="props.to" :label="props.label" variant="ghost" />
</template>
