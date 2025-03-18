<script setup lang="ts">
const props = defineProps<{
  items: OverviewItem[]
  status: string
  type: UniverseKey
}>()
</script>

<template>
  <div>
    <ApplicationError
      v-if="props.status === 'error'"
      title="Oops.. Something went wrong"
      message="Sorry, we couldn't fetch the data. Please try again later."
      :to="`/${props.type}`"
    />
    <template v-if="props.status === 'success'">
      <div
        v-if="props.items.length > 0"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <ApplicationOverviewGridItem
          v-for="item in props.items"
          :key="item.id"
          :item="item"
        />
      </div>
      <div v-else class="text-center text-neutral-400 my-8 text-xl">
        No items found
      </div>
    </template>
  </div>
</template>
