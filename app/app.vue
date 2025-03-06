<script setup lang="ts">
import { appName } from '~/constants'

useHead({
  title: appName,
})
</script>

<template>
  <VitePwaManifest />
  <UApp>
    <ApplicationHeader />
    <NuxtPage />
  </UApp>
</template>
