<script setup lang="ts">
const { id } = useRoute('pokemon-id').params
const { data, status } = useUniverseDetail('pokemon', id)
</script>

<template>
  <div class="py-8">
    <UContainer>
      <ApplicationBackToOverview to="/pokemon" />
      <ApplicationLoading v-if="status === 'pending'" />
      <div v-else>
        <pre>{{ data }}</pre>
      </div>
    </UContainer>
  </div>
</template>
