<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
</script>

<template>
  <UContainer :ui="{ constrained: 'max-w-3xl' }">
    <ContentRenderer v-if="page" :value="page" class="prose lg:prose-xl !max-w-none dark:prose-invert my-4 lg:my-8 prose-a:prose-headings:no-underline prose-headings:font-serif prose-headings:text-stone-800 dark:prose-headings:text-stone-200 prose-a:no-underline hover:prose-a:underline" />
  </UContainer>
</template>
