<script setup lang="ts">
const props = defineProps<{
  title: string
  image?: string
  icon?: string
}>()
</script>

<template>
  <header class="flex items-center gap-4 md:gap-12 my-4">
    <UAvatar
      v-if="props.image"
      :src="props.image"
      class="size-48 object-cover aspect-square"
    />
    <UIcon
      v-if="props.icon"
      :name="props.icon"
      size="3xl"
    />
    <h1 class="text-2xl md:text-4xl font-bold" v-text="props.title" />
  </header>
</template>
