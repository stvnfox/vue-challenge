<script setup lang="ts">
interface ListItem { label: string, value: string | number }

const props = defineProps<{
  label: string
  value: ListItem[] | string[]
  type: 'string' | 'object'
}>()
</script>

<template>
  <div class="flex items-start">
    <dt
      class="text-lg font-bold min-w-60"
      v-text="props.label"
    />
    <dd
      v-if="props.type === 'string'"
      class="text-blue-400 font-semibold capitalize"
      v-text="props.value.join(', ')"
    />
    <dd
      v-else
      class="flex flex-col gap-2"
    >
      <div
        v-for="item in (props.value as ListItem[])"
        :key="item.label"
        class="flex flex-col gap-2"
      >
        <span
          class="font-bold capitalize text-neutral-500 dark:text-neutral-400"
          v-text="item.label.replace('-', ' ')"
        />
        <span
          class="text-blue-400 font-semibold"
          v-text="item.value"
        />
      </div>
    </dd>
  </div>
</template>
