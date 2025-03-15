<script setup lang="ts">
const { id } = useRoute('nature-id').params
const { data, status } = useUniverseDetail('nature', id)
</script>

<template>
  <div class="py-8">
    <UContainer>
      <ApplicationBackToOverview to="/nature" />
      <ApplicationLoading v-if="status === 'pending'" />
      <div v-else>
        <pre>{{ data }}</pre>
      </div>
    </UContainer>
  </div>
</template>
