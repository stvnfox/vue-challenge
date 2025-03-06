<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
</script>

<template>
  <UContainer class="max-w-3xl py-20">
    <ContentRenderer v-if="page" :value="page" class="prose lg:prose-xl !max-w-none dark:prose-invert prose-headings:text-neutral-700 prose-headings:prose-a:text-neutral-700 dark:prose-headings:text-neutral-400 dark:prose-headings:prose-a:text-neutral-400 prose-headings:prose-a:no-underline" />
  </UContainer>
</template>
