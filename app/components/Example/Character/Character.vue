<script lang="ts" setup>
const props = defineProps<{
  name: string
}>()
</script>

<template>
  <UCard>
    <template #header>
      <span>{{ props.name }}</span>
    </template>
    <div>
      <slot />
    </div>
  </UCard>
</template>
