<script setup lang="ts">
provide('type', 'pokemon')
</script>

<template>
  <div class="py-8">
    <UContainer>
      <header class="flex items-center justify-between border-b border-neutral-600 mb-3 py-2 text-xl">
        <h1>Pokemon</h1>
      </header>
      <ApplicationOverview />
    </UContainer>
  </div>
</template>
