<script lang="ts" setup>
const { data: characters } = await useAsyncData('lord-of-the-rings-characters', () => {
  return queryCollection('lordOfTheRingsCharacter')
    .all()
})
</script>

<template>
  <PageSection v-if="characters?.length" title="Lord of the Rings">
    <div class="grid gap-4">
      <ExampleLordOfTheRingsCharacter v-for="character in characters" :key="character.id" :character="character" />
    </div>
  </PageSection>
</template>
