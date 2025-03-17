<script setup lang="ts">
import type { NatureAnimalCollectionItem } from '@nuxt/content'

const { id } = useRoute('nature-id').params
const { data, status } = useUniverseDetail<NatureAnimalCollectionItem>('nature', id)
</script>

<template>
  <div class="py-8">
    <UContainer>
      <ApplicationBackToOverview to="/nature" />
      <ApplicationDetail
        :status="status"
        to="/nature"
      >
        <template v-if="data">
          <ApplicationDetailHeader
            :title="data.name"
            :icon="data.icon"
          />
          <ApplicationDetailContent>
            <ApplicationDetailContentItem
              label="Latin Name"
              :value="data.nameLatin"
            />
            <ApplicationDetailContentItem
              label="Size"
              :value="data.size"
            />
            <ApplicationDetailContentItem
              label="Lifespan"
              :value="data.lifespan"
            />
            <ApplicationDetailContentListItem
              label="Diet"
              :value="data.diet"
              type="string"
            />
          </ApplicationDetailContent>
        </template>
      </ApplicationDetail>
    </UContainer>
  </div>
</template>
