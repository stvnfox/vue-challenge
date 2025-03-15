<script setup lang="ts">
const props = defineProps<{
  to: string
  label: string
}>()

const route = useRoute()
const isActive = computed(() => {
  if (props.to === '/') {
    return route.path === '/'
  }

  return route.path.startsWith(props.to)
})
</script>

<template>
  <!-- Added active state by adding a class to the button bc :active doesn't work - maybe because of mismatch docs version and version used in project -->
  <UButton
    :to="props.to"
    :label="props.label"
    :class="{ 'bg-blue-100 dark:bg-neutral-900': isActive }"
    :active="isActive"
    variant="ghost"
  />
</template>
