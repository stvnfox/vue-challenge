<script lang="ts" setup>
const props = defineProps<{
  items: string[]
}>()

const items = computed(() => {
  return props.items.map(item => item.toLowerCase()).join(', ')
})
</script>

<template>
  <span>{{ items }}</span>
</template>
