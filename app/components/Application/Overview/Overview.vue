<script setup lang="ts">
const views = [
  {
    label: 'Grid',
    icon: 'i-lucide-grid',
    slot: 'grid',
  },
  {
    label: 'List',
    icon: 'i-lucide-list',
    slot: 'list',
  },
]
</script>

<template>
  <section>
    <UTabs
      :items="views"
      variant="pill"
      class="gap-4"
      :ui="{
        root: 'items-end',
        list: 'w-48',
      }"
    >
      <template #grid>
        <ApplicationOverviewGrid />
      </template>
      <template #list>
        <ApplicationOverviewList />
      </template>
    </UTabs>
  </section>
</template>
