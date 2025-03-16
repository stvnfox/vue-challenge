<script setup lang="ts">
const props = defineProps<{
  status: string
}>()
</script>

<template>
  <section class="my-8 px-3">
    <ApplicationLoading v-if="props.status === 'pending'" />
    <div v-else>
      <slot />
    </div>
  </section>
</template>
