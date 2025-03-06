<script setup lang="ts">
import type { LordOfTheRingsCharacterCollectionItem } from '@nuxt/content'

const props = defineProps<{
  character: LordOfTheRingsCharacterCollectionItem
}>()

const name = computed(() => {
  return [props.character.nameFirst, props.character.nameLast].filter(Boolean).join(' ')
})
</script>

<template>
  <ExampleCharacter :name="name">
    <UAvatar
      :src="props.character.image"
      :alt="name"
      size="3xl"
    />

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
