<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'
import { h, resolveComponent } from 'vue'

const props = defineProps<{
  items: OverviewItem[]
  status: string
  type: UniverseKey
}>()

const UAvatar = resolveComponent('UAvatar')
const UButton = resolveComponent('UButton')
const UIcon = resolveComponent('UIcon')

const columns: TableColumn<OverviewItem>[] = [
  {
    accessorKey: 'image',
    header: '',
    cell: ({ row }) => {
      if (row.original.icon) {
        return h(UIcon, {
          name: row.original.icon,
          class: 'size-14',
        })
      }

      return h(UAvatar, {
        src: row.getValue('image'),
        alt: row.getValue('name'),
        size: '3xl',
        class: 'rounded-full',
        ui: {
          root: 'bg-transparent size-16',
        },
      })
    },
  },
  {
    accessorKey: 'name',
    header: '',
    cell: ({ row }) => {
      return h('div', { class: 'text-lg font-bold capitalize' }, row.getValue('name'))
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      return h(
        'div',
        { class: 'text-right' },
        h(UButton, {
          icon: 'i-lucide-arrow-right',
          class: 'ml-auto',
          to: row.original.url,
        }, () => 'See details'),
      )
    },
  },
]
</script>

<template>
  <div class="flex flex-col gap-4">
    <ApplicationError
      v-if="props.status === 'error'"
      title="Oops.. Something went wrong"
      message="Sorry, we couldn't fetch the data. Please try again later."
      :to="`/${props.type}`"
    />
    <UTable
      v-else
      :data="props.items"
      :columns="columns"
      class="flex-1"
      :ui="{
        thead: 'hidden',
        tbody: 'border-y border-neutral-800',
        td: 'first:w-4',
      }"
    />
  </div>
</template>
