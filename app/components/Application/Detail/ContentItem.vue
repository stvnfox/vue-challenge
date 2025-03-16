<script setup lang="ts">
const props = defineProps<{
  label: string
  value: string
}>()
</script>

<template>
  <div class="flex items-center">
    <dt class="text-lg font-bold min-w-40" v-text="props.label" />
    <dd class="text-blue-400 font-semibold" v-text="props.value" />
  </div>
</template>
