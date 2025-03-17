<script setup lang="ts">
import type { LordOfTheRingsCharacterCollectionItem } from '@nuxt/content'

const { id } = useRoute('lord-of-the-rings-id').params
const { data, status } = useUniverseDetail<LordOfTheRingsCharacterCollectionItem>('lord-of-the-rings', id)

const name = computed(() => {
  return [data.value.nameFirst, data.value.nameLast].filter(Boolean).join(' ')
})
</script>

<template>
  <div class="py-8">
    <UContainer>
      <ApplicationBackToOverview to="/lord-of-the-rings" />
      <ApplicationDetail
        :status="status"
        to="/lord-of-the-rings"
      >
        <template v-if="data">
          <ApplicationDetailHeader
            :title="name"
            :image="data.image"
          />
          <ApplicationDetailContent>
            <ApplicationDetailContentItem
              label="Age"
              :value="data.age"
            />
            <ApplicationDetailContentItem
              label="Height"
              :value="data.height"
            />
            <ApplicationDetailContentListItem
              label="Hobbies"
              :value="data.hobbies"
              type="string"
            />
          </ApplicationDetailContent>
        </template>
      </ApplicationDetail>
    </UContainer>
  </div>
</template>
