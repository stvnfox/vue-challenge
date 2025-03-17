<script setup lang="ts">
const props = defineProps<{
  title: string
  message: string
  to: string
}>()
</script>

<template>
  <div class="flex flex-col gap-2 items-center justify-center my-16 md:my-32">
    <UIcon
      name="mdi:alert-circle"
      class="text-red-500 size-40"
    />
    <h1 class="text-red-500 text-2xl font-bold" v-text="props.title" />
    <p class="text-red-500 text-lg font-medium" v-text="props.message" />
    <UButton
      variant="outline"
      size="lg"
      :to="props.to"
      label="Go back"
      color="error"
      class="mt-4 ring-2"
    />
  </div>
</template>
