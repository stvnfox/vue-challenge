<script setup lang="ts">
const { id } = useRoute('rick-and-morty-id').params
const { data, status } = useUniverseDetail('rick-and-morty', id)
</script>

<template>
  <div class="py-8">
    <UContainer>
      <ApplicationBackToOverview to="/rick-and-morty" />
      <ApplicationLoading v-if="status === 'pending'" />
      <div v-else>
        <pre>{{ data }}</pre>
      </div>
    </UContainer>
  </div>
</template>
