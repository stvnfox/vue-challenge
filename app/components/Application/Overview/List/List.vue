<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'
import { h, resolveComponent } from 'vue'

const type = inject('type')
const { items } = useUniverse(type as UniverseKey)

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
          class: 'w-16 h-16',
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
  <UTable
    :data="items"
    :columns="columns"
    class="flex-1"
    :ui="{
      thead: 'hidden',
      tbody: 'border-y border-neutral-800',
      td: 'first:w-4',
    }"
  />
</template>
