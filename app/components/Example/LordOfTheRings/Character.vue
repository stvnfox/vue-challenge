<script setup lang="ts">
import type { LordOfTheRingsCharacterCollectionItem } from '@nuxt/content'

const props = defineProps<{
  character: LordOfTheRingsCharacterCollectionItem
}>()

const name = computed(() => {
  return [props.character.nameFirst, props.character.nameLast].join(' ')
})
</script>

<template>
  <ExampleCharacter :name="name">
    <ExampleCharacterDetail label="Hobbies">
      <ExampleCharacterDetailList :items="props.character.hobbies" />
    </ExampleCharacterDetail>
    <ExampleCharacterDetail label="Age">
      {{ props.character.age }} years
    </ExampleCharacterDetail>
    <ExampleCharacterDetail label="Height">
      {{ props.character.height }} foot
    </ExampleCharacterDetail>
  </ExampleCharacter>
</template>
