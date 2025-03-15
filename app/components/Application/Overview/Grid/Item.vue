<script setup lang="ts">
const props = defineProps<{
  item: OverviewItem
}>()
</script>

<template>
  <UCard
    variant="soft"
    :ui="{
      footer: 'text-end',
    }"
  >
    <template #header>
      <h2 class="text-lg font-bold capitalize">
        {{ props.item.name }}
      </h2>
    </template>
    <img
      :src="props.item.image"
      alt=""
      class="size-32 mx-auto"
    >
    <template #footer>
      <UButton
        icon="i-lucide-arrow-right"
        :to="props.item.url"
        class="ml-auto"
      >
        See details
      </UButton>
    </template>
  </UCard>
</template>
