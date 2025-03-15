<script setup lang="ts">
const props = defineProps<{
  to: string
}>()
</script>

<template>
  <UButton :to="props.to" variant="link" icon="i-lucide-arrow-left">
    Back to overview
  </UButton>
</template>
