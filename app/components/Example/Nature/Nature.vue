<script lang="ts" setup>
const { data: animals } = await useAsyncData('nature-animals', () => {
  return queryCollection('natureAnimal')
    .all()
})
</script>

<template>
  <PageSection v-if="animals?.length" title="Nature">
    <div class="grid gap-4">
      <ExampleNatureAnimal
        v-for="animal in animals"
        :key="animal.id"
        :animal="animal"
      />
    </div>
  </PageSection>
</template>
