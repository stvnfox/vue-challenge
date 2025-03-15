<script setup lang="ts">
const { id } = useRoute('lord-of-the-rings-id').params
const { data, status } = useUniverseDetail('lord-of-the-rings', id)
</script>

<template>
  <div class="py-8">
    <UContainer>
      <ApplicationBackToOverview to="/lord-of-the-rings" />
      <ApplicationLoading v-if="status === 'pending'" />
      <div v-else>
        <pre>{{ data }}</pre>
      </div>
    </UContainer>
  </div>
</template>
