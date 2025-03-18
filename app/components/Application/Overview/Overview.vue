<script setup lang="ts">
const props = defineProps<{
  type: UniverseKey
}>()

const views = [
  {
    label: 'Grid',
    icon: 'i-lucide-grid',
    slot: 'grid',
    value: 'grid',
  },
  {
    label: 'List',
    icon: 'i-lucide-list',
    slot: 'list',
    value: 'list',
  },
]

const { items, status } = useUniverse(props.type)
const { view, showOverview } = useUniverseView(props.type)
</script>

<template>
  <UTabs
    v-if="showOverview"
    v-model="view"
    :items="views"
    variant="pill"
    class="gap-4"
    :ui="{
      root: 'items-end',
      list: 'w-48',
    }"
  >
    <template #grid>
      <ApplicationOverviewGrid
        :items="items"
        :status="status"
        :type="type"
      />
    </template>
    <template #list>
      <ApplicationOverviewList
        :items="items"
        :status="status"
        :type="type"
      />
    </template>
  </UTabs>
  <ApplicationLoading v-else />
</template>
