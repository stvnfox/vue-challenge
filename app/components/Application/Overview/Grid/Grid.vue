<script setup lang="ts">
const type = inject('type')

const { items } = useUniverse(type)
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div
      v-for="item in items"
      :key="item.id"
    >
      <ApplicationOverviewGridItem
        :item="item"
      />
    </div>
  </div>
</template>
