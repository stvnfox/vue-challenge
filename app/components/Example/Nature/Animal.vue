<script lang="ts" setup>
import type { NatureAnimalCollectionItem } from '@nuxt/content'

const props = defineProps<{
  animal: NatureAnimalCollectionItem
}>()
</script>

<template>
  <ExampleCharacter :name="props.animal.name">
    <div v-if="props.animal.icon" class="flex justify-center">
      <UIcon :name="props.animal.icon" class="w-60 h-60 dark:text-pink-300" />
    </div>
    <ExampleCharacterDetail label="Latin name">
      {{ props.animal.nameLatin }}
    </ExampleCharacterDetail>
    <ExampleCharacterDetail label="Size">
      {{ props.animal.size }}
    </ExampleCharacterDetail>
    <ExampleCharacterDetail label="Lifespan">
      {{ props.animal.lifespan }} years
    </ExampleCharacterDetail>
    <ExampleCharacterDetail label="Diet">
      <ExampleCharacterDetailList :items="props.animal.diet" />
    </ExampleCharacterDetail>
  </ExampleCharacter>
</template>
