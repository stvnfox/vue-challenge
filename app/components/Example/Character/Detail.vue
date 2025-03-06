<script lang="ts" setup>
const props = defineProps<{
  label: string
}>()
</script>

<template>
  <div class="flex gap-2">
    <strong class="flex min-w-20">
      {{ props.label }}:
    </strong>
    <div>
      <slot />
    </div>
  </div>
</template>
