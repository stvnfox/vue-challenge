<script lang="ts" setup>
import type { NatureAnimalCollectionItem } from '@nuxt/content'

const props = defineProps<{
  animal: NatureAnimalCollectionItem
}>()
</script>

<template>
  <ExampleCharacter :name="props.animal.name">
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
