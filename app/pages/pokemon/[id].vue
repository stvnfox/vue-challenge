<script setup lang="ts">
import type { PokemonCharacter } from '~/types/characters'

const { id } = useRoute('pokemon-id').params
const { data, status } = useUniverseDetail<PokemonCharacter>('pokemon', id)

const types = computed(() => {
  return data.value.types.map(type => type.type.name)
})

const abilities = computed(() => {
  return data.value.abilities.map(ability => ability.ability.name.replace(/-/g, ' '))
})

const moves = computed(() => {
  return data.value.moves.map(move => move.move.name.replace(/-/g, ' '))
})

const stats = computed(() => {
  return data.value.stats.map((stat) => {
    return {
      label: stat.stat.name,
      value: stat.base_stat,
    }
  })
})
</script>

<template>
  <div class="py-8">
    <UContainer>
      <ApplicationBackToOverview to="/pokemon" />
      <ApplicationDetail
        :status="status"
        to="/pokemon"
      >
        <ApplicationDetailHeader
          :title="data.name"
          :image="data.sprites.front_default"
        />
        <ApplicationDetailContent>
          <ApplicationDetailContentListItem
            v-if="stats.length"
            label="Stats"
            :value="stats"
            type="object"
          />
          <ApplicationDetailContentListItem
            v-if="types.length"
            label="Types"
            :value="types"
            type="string"
          />
          <ApplicationDetailContentItem
            v-if="data.height"
            label="Height"
            :value="data.height"
          />
          <ApplicationDetailContentItem
            v-if="data.weight"
            label="Weight"
            :value="data.weight"
          />
          <ApplicationDetailContentItem
            v-if="data.base_experience"
            label="Base Experience"
            :value="data.base_experience"
          />
          <ApplicationDetailContentListItem
            v-if="abilities.length"
            label="Abilities"
            :value="abilities"
            type="string"
          />
          <ApplicationDetailContentListItem
            v-if="moves.length"
            label="Moves"
            :value="moves"
            type="string"
          />
        </ApplicationDetailContent>
      </ApplicationDetail>
    </UContainer>
  </div>
</template>
