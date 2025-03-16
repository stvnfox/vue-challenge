<script setup lang="ts">
import type { RickAndMortyCharacter } from '~/types/characters'

const { id } = useRoute('rick-and-morty-id').params
const { data, status } = useUniverseDetail<RickAndMortyCharacter>('rick-and-morty', id)
</script>

<template>
  <div class="py-8">
    <UContainer>
      <ApplicationBackToOverview to="/rick-and-morty" />
      <ApplicationDetail :status="status">
        <ApplicationDetailHeader
          :title="data.name"
          :image="data.image"
        />
        <ApplicationDetailContent>
          <ApplicationDetailContentItem
            v-if="data.status"
            label="Status"
            :value="data.status"
          />
          <ApplicationDetailContentItem
            v-if="data.gender"
            label="Gender"
            :value="data.gender"
          />
          <ApplicationDetailContentItem
            v-if="data.species"
            label="Species"
            :value="data.species"
          />
          <ApplicationDetailContentItem
            v-if="data.type"
            label="Type"
            :value="data.type"
          />
          <ApplicationDetailContentItem
            v-if="data.origin"
            label="Origin"
            :value="data.origin.name"
          />
          <ApplicationDetailContentItem
            v-if="data.location"
            label="Location"
            :value="data.location.name"
          />
        </ApplicationDetailContent>
      </ApplicationDetail>
    </UContainer>
  </div>
</template>
